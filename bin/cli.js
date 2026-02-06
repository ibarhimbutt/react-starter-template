#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
};

function log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function logSuccess(message) {
    log(`✓ ${message}`, colors.green);
}

function logInfo(message) {
    log(`→ ${message}`, colors.cyan);
}

function logError(message) {
    log(`✗ ${message}`, colors.red);
}

// Get project name from arguments
const projectName = process.argv[2];

if (!projectName) {
    logError('Please specify a project name:');
    log('  npx react-starter-template my-app', colors.cyan);
    process.exit(1);
}

// Validate project name
if (!/^[a-zA-Z0-9-_]+$/.test(projectName)) {
    logError('Project name can only contain letters, numbers, hyphens, and underscores.');
    process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);

// Check if directory already exists
if (fs.existsSync(targetDir)) {
    logError(`Directory "${projectName}" already exists.`);
    process.exit(1);
}

log('');
log(`${colors.bright}🚀 Creating React Starter Template...${colors.reset}`);
log('');

try {
    // Get the template directory
    const templateDir = path.join(__dirname, '..', 'template');

    // Copy template to target directory
    logInfo('Copying template files...');
    copyDirSync(templateDir, targetDir);
    logSuccess('Template files copied');

    // Update package.json with project name
    logInfo('Updating package.json...');
    const packageJsonPath = path.join(targetDir, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    packageJson.name = projectName;
    packageJson.version = '0.1.0';
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    logSuccess('package.json updated');

    // Install dependencies
    logInfo('Installing dependencies (this may take a minute)...');
    execSync('npm install', { cwd: targetDir, stdio: 'inherit' });
    logSuccess('Dependencies installed');

    // Success message
    log('');
    log(`${colors.bright}${colors.green}✅ Success!${colors.reset} Created ${projectName} at ${targetDir}`);
    log('');
    log('Inside that directory, you can run:');
    log('');
    log(`  ${colors.cyan}npm run dev${colors.reset}     Starts the development server`);
    log(`  ${colors.cyan}npm run build${colors.reset}   Builds the app for production`);
    log(`  ${colors.cyan}npm run preview${colors.reset} Previews the production build`);
    log('');
    log('Get started by running:');
    log('');
    log(`  ${colors.cyan}cd ${projectName}${colors.reset}`);
    log(`  ${colors.cyan}npm run dev${colors.reset}`);
    log('');
    log(`${colors.yellow}Happy coding! 🎉${colors.reset}`);
    log('');

} catch (error) {
    logError('An error occurred:');
    console.error(error.message);
    process.exit(1);
}

/**
 * Recursively copy a directory
 */
function copyDirSync(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDirSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
