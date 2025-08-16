pipeline {
    agent any

    environment {
        BUILD_DIR = "build"
        DEPLOY_PATH = "weather-forecast"
        APP_NAME = "weather-forecast-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/ngovanlau/weather-forecast-web.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                sh "tar -czf build.tar.gz ${BUILD_DIR} ecosystem.config.js package.json"
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def deployPath = env.DEPLOY_PATH
                    def appName = env.APP_NAME
                    
                    sshPublisher(publishers: [
                        sshPublisherDesc(
                            configName: "UbtService01",
                            transfers: [
                                sshTransfer(
                                    sourceFiles: "build.tar.gz",
                                    removePrefix: "",
                                    remoteDirectory: deployPath,
                                    execCommand: """
                                        mkdir -p ${deployPath} && 
                                        cd ${deployPath} && 
                                        tar -xzf build.tar.gz && 
                                        rm build.tar.gz && 
                                        npm ci --production && 
                                        npx pm2 reload ${appName} || npx pm2 start ecosystem.config.js
                                    """,
                                    execTimeout: 300000
                                )
                            ],
                            verbose: true
                        )
                    ])
                }
            }
        }
    }
    
    post {
        success {
            echo 'Build and deploy successfully!'
        }

        failure {
            echo 'Build or deploy failed!'
        }
        
        cleanup {
            sh 'rm -f build.tar.gz'
        }
    }
}