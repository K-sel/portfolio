import { Client } from 'basic-ftp';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Pour obtenir __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Charger les variables d'environnement
dotenv.config();

async function deploy() {
    const client = new Client();
    client.ftp.verbose = true; // Affiche tous les logs FTP
    
    // Créer le fichier .htaccess dans dist/
    const htaccessContent = `RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`;
    
    fs.writeFileSync(path.join(__dirname, 'dist', '.htaccess'), htaccessContent);
    console.log('📄 Fichier .htaccess créé');
    
    try {
        console.log('🔌 Connexion au serveur FTP...');
        
        await client.access({
            host: process.env.FTP_HOST,
            port: parseInt(process.env.FTP_PORT) || 21,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: false
        });
        
        console.log('✅ Connecté au serveur FTP');
        
        // Afficher le répertoire courant
        const currentDir = await client.pwd();
        console.log(`📁 Répertoire courant: ${currentDir}`);
        
        // Aller dans le répertoire de destination (le créer si nécessaire)
        const remotePath = process.env.FTP_REMOTE_PATH || '/';
        await client.ensureDir(remotePath);
        console.log(`📂 Navigation vers: ${remotePath}`);
        
        // Upload tout le dossier dist/
        const localPath = path.join(__dirname, 'dist');
        console.log(`📤 Upload du dossier: ${localPath}`);
        console.log('⏳ Cela peut prendre quelques instants...\n');
        
        // Suivre la progression
        client.trackProgress(info => {
            console.log(`📦 ${info.type}: ${info.name} - ${(info.bytes / 1024).toFixed(2)} KB`);
        });
        
        await client.uploadFromDir(localPath);
        
        console.log('\n🎉 Déploiement terminé avec succès !');
        
    } catch (error) {
        console.error('❌ Erreur de déploiement:', error.message);
        process.exit(1);
    }
    
    client.close();
}

deploy();