# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Post.destroy_all
Reply.destroy_all
Comment.destroy_all
Supportership.destroy_all
CollaborateRequest.destroy_all


u1 = User.create(username: 'sbastian', password: '123', name: 'Sara', location: 'Philadelphia, PA', 
                 profile_pic: 'file:///Users/sarabastian/Desktop/20191226%20some%20friends%20060.jpg',
                 bio: 'Aspiring fullstack software engineer looking to make an impact with clean code')

u2 = User.create(username: 'smori', password: '123', name: 'Sienna', location: 'New York, NY',
                profile_pic: ' ',
                bio: 'Credit Researcher looking to learn Python')

p1 = Project.create(title: 'RVBnB', story: 'A marketplace for users to rent and list campervans, RVs, and trailers',
                    timeline: 60, fundraising_goal: 1000, image: 'https://i.pinimg.com/564x/86/36/ce/8636ce9e4053b3a46356325742b78214.jpg',
                    github: 'https://github.com/sarabastian/Phase-4-Project,',
                    language: 'React',
                    stage: 'early', user_id: u1.id)
# p2 = Project.create(title: 'Hypnos - A sleep journal that helps you get better sleep')

ps1 = Post.create(project_id: p1.id, user_id: u1.id, blurb: 'hey everyone! just updated the homepage - check it out and let me know what you think!')

r1 = Reply.create(post_id: ps1.id, user_id: u2.id, reply: 'love it. 10/10')

c1 = Comment.create(project_id: p1.id, user_id: u2.id, blurb: 'just found your page...like what you are up to keep it up')

s1 = Supportership.create(project_id: p1.id, user_id: u2.id)


collab1 = CollaborateRequest.create(project_id: p1.id, user_id: u2.id)