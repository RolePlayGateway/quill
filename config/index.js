module.exports = {
  service: {
    name: 'RolePlayGateway', // change this!
    synopsis: 'Write better, together.', // and this...
    mission: 'Create your own world with RolePlayGateway\'s collaborative writing tools.', // also
    description: 'RolePlayGateway helps you collaborate with fellow writers to create your own world. We\'ve created a set of roleplaying tools to help you organize your worlds and write with your fellow authors.',
    icon: 'pencil' // pick from: http://semantic-ui.com/elements/icon.html
  },
  database: {
    name: 'roleplaygateway' // only change if you know what you're doing
  },
  services: {
    http: {
      port: 3000 // you might want this to be some other port, like 80
    }
  }
};
