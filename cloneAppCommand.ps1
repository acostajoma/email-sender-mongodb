appservices app create --name "rids-agency"  --deployment-model "LOCAL"  --provider-region "gcp-us-central1"  --cluster  "Production"  --environment "production" 

#   appservices apps create [flags]

# Flags:
#       --remote string                              Specify the name or ID of a remote app to clone
#       --local string                               Specify the local filepath of an app to be created
#   -n, --name string                                Name your new app (Note: This name will be used internally and cannot be changed later. Names must only include: ASCII letters, numbers, _ -)
#       --provider-region string                     Select the app's provider region [Learn more: https://www.mongodb.com/docs/atlas/app-services/manage-apps/deploy/deployment-models-and-regions/#cloud-deployment-regions]
#   -d, --deployment-model string                    Select the app's deployment model (Default value: <none>; Allowed values: GLOBAL, LOCAL) [Learn more: https://www.mongodb.com/docs/atlas/app-services/manage-apps/deploy/deployment-models-and-regions/#deployment-models]
#   -e, --environment string                         Select the app's environment (Default value: <none>; Allowed values: development, testing, qa, production) [Learn more: https://www.mongodb.com/docs/atlas/app-services/manage-apps/configure/environments/]
#       --cluster strings                            Link Atlas cluster(s) to your app (Note: Only one cluster can be linked during app creation if creating a template app)
#       --cluster-service-name strings               Specify the app's Service name to reference your Atlas cluster (Note: Service names will be overwro your app (Note: Federated Database instances cannot be used to create template apps)
#       --federated-database-service-name strings    Specify the app's Service name to reference your Atlas Federated Database instance
#       --template string                            Create your app from an available template [Learn more: https://www.mongodb.com/docs/atlas/app-services/reference/template-apps/#templateo your app (Note: Federated Database instances cannot be used to create template apps)        
#       --federated-database-service-name strings    Specify the app's Service name to reference your Atlas Federated Database instance
#       --template string                            Create your app from an available template [Learn more: https://www.mongodb.com/docs/atlas/app-services/reference/template-apps/#template-apps-available]
#   -x, --dry-run                                    Run without writing any changes to the local filepath or pushing any changes to the App Services server  
#       --project string                             Specify the ID of a MongoDB Atlas project
#   -h, --help                                       help for create

# Global Flags:
#       --profile string         Specify your profile (Default value: "default") [Learn more: https://www.mongodb.com/docs/atlas/app-services/cli/#cli-profiles]
#       --telemetry string       Enable/Disable CLI usage tracking for your current profile (Default value: "on"; Allowed values: "on", "off")
#   -o, --output-target string   Write CLI output to the specified filepath     
#   -f, --output-format string   Set the CLI output format (Default value: <blank>; Allowed values: <blank>, "json")
#       --disable-colors         Disable all CLI output styling (e.g. colors, font styles, etc.)  -y, --yes                    Automatically proceed through CLI commands by agreeing to any required user prompts
# PS C:\Users\Usuario\gitRepos\portfolio-mongodb>