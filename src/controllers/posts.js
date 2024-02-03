const {Posts, Users} = require('../db/models')

async function createNewPost(userId, title, body){
    const post = await Posts.create({
        title,
        body,
        userId,
    })
    return post
}

async function findAllPosts(query){
    const posts = await Posts.findAll({
        include: [Users]
    })
    return posts
}

module.exports = {
    createNewPost,
    findAllPosts
}

// async function yoi(){
//     // console.log(await createNewPost(3,'sexy bikini', ' maa chudaye bidy'));

//     const posts = await findAllPosts()
//     for (let p of posts){
//         console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==============\n`)
//     }

// }

// yoi()