module.exports = {
  service: {
    name: 'Quill', // change this!
    icon: 'pencil', // pick from: http://semantic-ui.com/elements/icon.html
    pitch: 'Create a World Together.',
    synopsis: 'Write better, together.', // and this...
    mission: 'Design your own universe with Quill\'s collaboration engine.', // also
    description: 'RolePlayGateway helps you collaborate with fellow writers to create your own world. We\'ve created a set of roleplaying tools to help you organize your worlds and write with your fellow authors.',
    about: 'Quill is designed <strong>with <i class="heart icon"></i>love</strong> by a caring community of creators from all around the world.  We believe that everyone has the right to write, re-write, and tell amazing stories through collaboratively-designed and digitally-organized storytelling experiences.',
    copyright: 'Quill enforces no copyright over any content published by its users, and serves only as a conduit through which they share their story.',
    cta: {
      link: '/universes',
      text: 'View All <span><i class="globe icon"></i></span>Worlds',
      icon: 'globe'
    },
    points: [
      {
        header: 'e',
        description: 'Maki can build web, desktop, <em>and</em> native mobile apps, directly from your definitions.  With consistent interactions across them all.',
        action: {
          text: 'Read the Docs &raquo;',
          link: '/docs'
        }
      },
    ]
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
