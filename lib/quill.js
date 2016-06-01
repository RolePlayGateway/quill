var config = require('../config');

var Maki = require('maki');
var quill = new Maki(config);

var ObjectId = quill.mongoose.Schema.Types.ObjectId;

quill.use(require('maki-client-level'));

var Passport = require('maki-passport-local');
var passport = new Passport({
  resource: 'Author'
});

var Auth = require('maki-auth-simple');
var auth = new Auth({
  roles: ['admin']
});

quill.use(passport);
quill.use(auth);

var Author = quill.define('Author', {
  icon: 'users',
  description: 'The writers of RolePlayGateway.',
  attributes: {
    username: { type: String , max: 60 },
    password: { type: String , masked: true , max: 240 }
  }
});

var Universe = quill.define('Universe', {
  icon: 'book',
  description: 'Fictional worlds on RolePlayGateway.',
  attributes: {
    _creator: { type: ObjectId , ref: 'Author' , required: true },
    name: { type: String , max: 80 , slug: true , required: true },
    synopsis: { type: String , max: 240 },
    created: { type: Date , default: Date.now , required: true },
    edited: { type: Date },
    description: { type: String },
    rules: { type: String },
    stats: {
      posts: { type: Number , default: 0 },
      words: { type: Number },
      sentences: { type: Number },
      paragraphs: { type: Number },
      authors: { type: Number }
    }
  }
});

var Character = quill.define('Character', {
  icon: 'user',
  description: 'Characters in a world on RolePlayGateway',
  attributes: {
    name: { type: String , max: 160 , slug: true , required: true },
    synopsis: { type: String , max: 240 },
    description: { type: String },
    _universe: { type: ObjectId , ref: 'Universe' }
  }
});

var Quest = quill.define('Quest', {
  icon: 'protect',
  description: 'Quests for characters to take on.',
  attributes: {
    name: { type: String , max: 160 , slug: true , required: true },
    synopsis: { type: String , max: 240 },
    description: { type: String },
    _universe: { type: ObjectId , ref: 'Universe' }
  }
});

var Bundle = quill.define('Bundle', {
  icon: 'tags',
  description: 'Bundles of posts that make up interesting storyline arcs.',
  attributes: {
    name: { type: String , max: 160 , slug: true , required: true },
    synopsis: { type: String , max: 240 },
    description: { type: String },
    _universe: { type: ObjectId , ref: 'Universe' }
  }
});

var Place = quill.define('Place', {
  icon: 'globe',
  description: 'Settings in a Universe on RolePlayGateway.',
  attributes: {
    name: { type: String , max: 160 , slug: true },
    description: { type: String },
    stats: {
      posts: { type: Number , default: 0 },
      words: { type: Number },
      sentences: { type: Number },
      paragraphs: { type: Number },
      authors: { type: Number }
    }
  }
});

var Post = quill.define('Post', {
  icon: 'file text',
  description: 'Written content by an author.',
  attributes: {
    _author: { type: ObjectId , ref: 'Author' , required: true },
    _place: { type: ObjectId , ref: 'Place' , required: true },
    _universe: { type: ObjectId , ref: 'Universe' , required: true },
    content: { type: String },
    created: { type: Date , default: Date.now , required: true },
    edited: { type: Date },
    stats: {
      words: { type: Number },
      sentences: { type: Number },
      paragraphs: { type: Number },
    }
  }
});

var Forum = quill.define('Forum', {
  icon: 'unordered list',
  description: 'Generalized discussion forums, to which Topics are posted.',
  attributes: {
    title: { type: String , slug: true , required: true , max: 80 },
    description: { type: String },
    created: { type: Date , default: Date.now , required: true },
    edited: { type: Date },
  }
});

var Topic = quill.define('Topic', {
  icon: 'idea',
  description: 'Discussion topics posted by authors on RolePlayGateway.',
  attributes: {
    _author: { type: ObjectId , ref: 'Author' },
    title: { type: String , slug: true , required: true , max: 80 },
    description: { type: String },
    created: { type: Date , default: Date.now , required: true },
    edited: { type: Date },
  }
});

var Comment = quill.define('Comment', {
  icon: 'comments',
  description: 'Comments by authors on various items.',
  attributes: {
    _author: { type: ObjectId , ref: 'Author' , required: true },
    content: { type: String },
    created: { type: Date , default: Date.now , required: true },
    edited: { type: Date },
  }
});

var Task = quill.define('Task', {
  icon: 'checkmark box',
  description: 'Queued tasks for manual review.',
  attributes: {
    _creator: { type: ObjectId , ref: 'Author' /*, required: true */ },
    _owner: { type: ObjectId , ref: 'Author' },
    created: { type: Date , default: Date.now , required: true },
    comment: { type: String },
    attachment: {
      id: { type: Number },
      type: { type: String , enum: ['content', 'quest', 'bundle', 'place', 'universe', 'comment', 'topic'] }
    }
  }
});

module.exports = quill;
