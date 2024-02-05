const {Posts, Comments} = require('../db/models')

async function createNewComment(userId, postId, title, body){
    const comment = await Comments.create({
        title,
        body, 
        userId,
        postId
    })
    return comment
}

async function findAllComments(query){
    const comments = await Comments.findAll({
       // inclue: [Users],
        include: [Posts]
    })
    return comments
}

module.exports = {
    createNewComment,
    findAllComments
}

//Test code
// console.log("-----------------------------");

// async function yoi(){
//     const comments = await findAllComments()
//     for (let p of comments){
//         // console.log("#####begin###########3");
//         // console.log(p.userId)
//         // console.log("######end##########");
//         let help = p.userId
//         let usern = await Users.findOne({ where: help })
//         console.log(`\n ${p.title}\n 
//         author : ${usern.username}\n
//         postid : ${p.post.id}\n
//         ${p.body}\n==============\n`)
//     }
// }

// yoi()