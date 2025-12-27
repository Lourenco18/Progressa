export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de';

export const translations = {
    pt: {
        // Auth Screen
        appName: 'Progressa',
        welcome: 'Bem-vindo!',
        signIn: 'Entre na sua conta',
        signUp: 'Crie sua conta',
        name: 'Nome',
        email: 'Email',
        password: 'Senha',
        fullName: 'Seu nome completo',
        emailPlaceholder: 'seu@email.com',
        passwordPlaceholder: '••••••••',
        signInButton: 'Entrar',
        signUpButton: 'Criar Conta',
        or: 'OU',
        createAccount: 'Criar nova conta',
        haveAccount: 'Já tenho uma conta',
        newUser: 'Novo no Progressa? Comece agora!',
        existingUser: 'Já tem uma conta? Entre agora!',
        logout: 'Sair da Conta',

        // Tabs
        home: 'Home',
        login: 'Login',

        // Home Screen
        editScreen: 'Edite app/index.tsx para editar esta tela.',
        loginPage: 'Página de Login',
    },
    en: {
        // Auth Screen
        appName: 'Progressa',
        welcome: 'Welcome!',
        signIn: 'Sign in to your account',
        signUp: 'Create your account',
        name: 'Name',
        email: 'Email',
        password: 'Password',
        fullName: 'Your full name',
        emailPlaceholder: 'your@email.com',
        passwordPlaceholder: '••••••••',
        signInButton: 'Sign In',
        signUpButton: 'Create Account',
        or: 'OR',
        createAccount: 'Create new account',
        haveAccount: 'Already have an account',
        newUser: 'New to Progressa? Get started!',
        existingUser: 'Already have an account? Sign in now!',
        logout: 'Sign Out',

        // Tabs
        home: 'Home',
        login: 'Login',

        // Home Screen
        editScreen: 'Edit app/index.tsx to edit this screen.',
        loginPage: 'Login Page',
    },
    es: {
        // Auth Screen
        appName: 'Progressa',
        welcome: '¡Bienvenido!',
        signIn: 'Inicia sesión en tu cuenta',
        signUp: 'Crea tu cuenta',
        name: 'Nombre',
        email: 'Correo',
        password: 'Contraseña',
        fullName: 'Tu nombre completo',
        emailPlaceholder: 'tu@correo.com',
        passwordPlaceholder: '••••••••',
        signInButton: 'Iniciar Sesión',
        signUpButton: 'Crear Cuenta',
        or: 'O',
        createAccount: 'Crear nueva cuenta',
        haveAccount: 'Ya tengo una cuenta',
        newUser: '¿Nuevo en Progressa? ¡Comienza ahora!',
        existingUser: '¿Ya tienes una cuenta? ¡Inicia sesión ahora!',
        logout: 'Cerrar Sesión',

        // Tabs
        home: 'Inicio',
        login: 'Acceso',

        // Home Screen
        editScreen: 'Edita app/index.tsx para editar esta pantalla.',
        loginPage: 'Página de Inicio de Sesión',
    },
    fr: {
        // Auth Screen
        appName: 'Progressa',
        welcome: 'Bienvenue !',
        signIn: 'Connectez-vous à votre compte',
        signUp: 'Créez votre compte',
        name: 'Nom',
        email: 'Email',
        password: 'Mot de passe',
        fullName: 'Votre nom complet',
        emailPlaceholder: 'votre@email.com',
        passwordPlaceholder: '••••••••',
        signInButton: 'Se connecter',
        signUpButton: 'Créer un compte',
        or: 'OU',
        createAccount: 'Créer un nouveau compte',
        haveAccount: 'J\'ai déjà un compte',
        newUser: 'Nouveau sur Progressa ? Commencez maintenant !',
        existingUser: 'Vous avez déjà un compte ? Connectez-vous maintenant !',
        logout: 'Se déconnecter',

        // Tabs
        home: 'Accueil',
        login: 'Connexion',

        // Home Screen
        editScreen: 'Modifiez app/index.tsx pour éditer cet écran.',
        loginPage: 'Page de Connexion',
    },
    de: {
        // Auth Screen
        appName: 'Progressa',
        welcome: 'Willkommen!',
        signIn: 'Melden Sie sich bei Ihrem Konto an',
        signUp: 'Erstellen Sie Ihr Konto',
        name: 'Name',
        email: 'E-Mail',
        password: 'Passwort',
        fullName: 'Ihr vollständiger Name',
        emailPlaceholder: 'ihre@email.com',
        passwordPlaceholder: '••••••••',
        signInButton: 'Anmelden',
        signUpButton: 'Konto erstellen',
        or: 'ODER',
        createAccount: 'Neues Konto erstellen',
        haveAccount: 'Ich habe bereits ein Konto',
        newUser: 'Neu bei Progressa? Jetzt starten!',
        existingUser: 'Bereits ein Konto? Jetzt anmelden!',
        logout: 'Abmelden',

        // Tabs
        home: 'Startseite',
        login: 'Anmeldung',

        // Home Screen
        editScreen: 'Bearbeiten Sie app/index.tsx, um diesen Bildschirm zu bearbeiten.',
        loginPage: 'Anmeldeseite',
    },
};

export type TranslationKeys = keyof typeof translations.pt;
