var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId
var HelpSchema = new mongoose.Schema({
    name: String,
    loc: {
        type: [Number],
        index: '2d'
    },
    info: String,
    // 确定是否取消
    cancel: {
        type: Boolean,
        default: false
    },
    type: {
        type:String,
        default:'help'
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

HelpSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now
    } else {
        this.meta.updateAt = Date.now
    }
    next()
})

HelpSchema.statics = {
    queryByConditions: function(conditions, cb) {
        return this.find(conditions).exec(cb);
    }
}

var Help = mongoose.model('Help', HelpSchema)
module.exports = Help
