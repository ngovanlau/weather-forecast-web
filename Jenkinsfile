pipeline {
	agent any

	environment  {
		BUILD_DIR = "build"
		DEPLOY_PATH = "weather-forecast_publish"
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
				sh 'tar -czf build.tar.gz build ecosystem.config.js'
			}
		}


		stage('Deploy') {
			steps {
				script {
					sshPublisher {
						publishers [
							sshPublisherDesc {
								configName: "UbtService01"
								transfers [
									sshTransfer {
										sourceFiles: "build.tar.gz"
										removePrefix: "",
										removeDirectory: "${env.DEPLOY_PATH}"
										execCommand: """
											mkdir -p ${DEPLOY_PATH} &&
											tar -xzf ${DEPLOY_PATH}/build.tar.gz -C ${DEPLOY_PATH} &&
											rm ${DEPLOY_PATH}/build.tar.gz &&
											cd ${DEPLOY_PATH} &&
											npm ci --production &&
											pm2 restart app-name
										""".stripIndent(),
										execTimeout: 120000
									}
								]
							}
						]
					}
				}
			}
		}
	}

	post {
		success {
			echo 'Build successfully'
		}

		failure {
			echo 'Build failed'
		}
	}
}
