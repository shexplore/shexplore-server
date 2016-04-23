var Fields = require('bookshelf-schema/lib/fields'),
    StringField = Fields.StringField,
    BooleanField = Fields.BooleanField,
    IntField = Fields.IntField,
    EmailField = Fields.EmailField;

var Relations = require('bookshelf-schema/lib/relations'),
    HasMany = Relations.HasMany,
    HasOne = Relations.HasOne;

var Project = require('./project')


var Project = db.Model.extend({ tableName: 'projects' }, {
  schema: [
    StringField('name'),
    IntField('difficulty'),
    IntField('completion'),
    StringField('description'),
    StringField('git'),
    HasMany(require('./account').User),
    HasOne(require('./account').User)
  ]
});

module.exports = Project;