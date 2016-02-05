module.exports = function(robot) {
  robot.respond(requests[0], function(msg){
    msg.reply(encouragement[Math.floor(Math.random() * encouragement.length)]);
  });
    robot.respond(requests[1], function(msg){
    msg.reply("Thanks, " + msg.message.user.name.toString());
  });
};
requests = [/encourage me\s?/i,
/good job\s?/i,
]

encouragement =[
"The only person you are destined to become is the person you decide to be. ~Ralph Waldo Emerson",
"Start where you are. Use what you have. Do what you can. ~Arthur Ashe",
"How wonderful it is that nobody need wait a single moment before starting to improve the world. ~Anne Frank",
"When one door closes another door opens; but we so often look so long and so regretfully upon the closed door, that we do not see the ones which open for us. ~Alexander Graham Bell",
"Life is a succession of lessons which must be lived to be understood.~Helen Keller",
"When you get into a tight place and everything goes against you, till it seems as though you could not hang on a minute longer, never give up then, for that is just the place and time that the tide will turn. ~Harriet Beecher Stowe",
"You must do the thing you think you cannot do. ~Eleanor Roosevelt",
"If you don’t pay appropriate attention to what has your attention, it will take more of your attention than it deserves. ~David Allen",
"I find hope in the darkest of days, and focus in the brightest. I do not judge the universe. ~Dalai Lama",
"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. ~Helen Keller",
"It is by going down into the abyss that we recover the treasures of life. Where you stumble, there lies your treasure. ~Joseph Campbell",
"In essence, if we want to direct our lives, we must take control of our consistent actions. It’s not what we do once in a while that shapes our lives, but what we do consistently. ~Tony Robbins",
"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ~Thomas A. Edison",
"You are never to old to set another goal or to dream a new dream. ~C.S. Lewis",
"Even if you fall on your face, you’re still moving forward. ~Victor Kiam",
"Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice. ~Wayne Dyer",
"Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now. ~Denis Waitley",
"Do you want to know who you are? Don’t ask. Act! Action will delineate and define you. ~Thomas Jefferson",
"The key is to keep company only with people who uplift you, whose presence calls forth your best. ~Epictetus",
"Be impeccable with your word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love. ~Miguel Angel Ruiz",
"Act as if what you do makes a difference. It does. ~William James",
"Learning is the beginning of wealth. Learning is the beginning of health. Learning is the beginning of spirituality. Searching and learning is where the miracle process all begins. ~Jim Rohn",
"I’d rather attempt to do something great and fail than to attempt to do nothing and succeed. ~Robert H. Schuller",
"If it is bread that you seek, you will have bread. If it is the soul you seek, you will find the soul. If you understand this secret, you know you are that which you seek. ~Rumi",
"Always say ‘yes’ to the present moment. What could be more futile, more insane, than to create inner resistance to what already is? what could be more insane than to oppose life itself, which is now and always now? Surrender to what is. Say ‘yes’ to life — and see how life suddenly starts working for you rather than against you. ~Eckhart Tolle",
"Perhaps everything terrible is in its being something that needs our love. ~Rainer Maria Rilke",
"Hold on to what is good, even if it’s a handful of earth. ~Hopi prayer",
"Let your soul stand cool and composed before a million universes. ~Walt Whitman",
"If you are going through hell, keep going. ~Winston Churchill",
"Tell you heart that the fear of suffering is worse than suffering itself. And no heart has ever suffered when it goes in search of its dream. ~Paulo Coelho",
"The secret of health for both mind and body is not to mourn for the past, not to worry about the future . . . but to live the present moment wisely and earnestly. ~Buddha",
"In the midst of movement and chaos, keep stillness inside of you. ~Deepak Chopra",
"Good humor is a tonic for mind and body. It is the best antidote for anxiety and depression. It is a business asset. It attracts and keep friends. It lightens human burdens. It is the direct route to serenity and contentment. ~Greenville Kleisser",
"What you thought before has led to every choice you have made, and this adds up to you at this moment. If you want to change who you are physically, mentally, and spiritually, you will have to change what you think. ~Dr. Patrick Gentempo",
"Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around. ~Leo Buscaglia",
"Fall seven times, stand up eight. ~Japanese Proverb",
"Problems are not stop signs, they are guidelines. ~Robert Schuller",
"We must embrace pain and burn it as fuel for our journey. ~Kenji Miyazawa",
"By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands — your own. ~Mark Victor Hansen",
"Be patient with yourself. Self-growth is tender; it’s holy ground. There’s no greater investment. ~Stephen Covey",
"Would you like me to give you a formula for success? It’s quite simple, really. Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, So go ahead and make mistakes. Make all you can. Because remember that’s where you will find success. ~Thomas J. Watson",
"Nobody can go back and start a new beginning, but anyone can start today and make a new ending. ~Maria Robinson",
"If we did all the things we are capable of, we would astound ourselves. ~Thomas Edison",
"Try not to become a person of success, but rather try to become a person of value. ~Albert Einstein",
"If you don’t value your time, neither will others. Stop giving away your time and talents — start charging for it. ~Kim Garst",
"Don’t be afraid to give up the good to go for the great. ~John D. Rockefeller",
"Life is not about finding yourself. Life is about creating yourself. ~Lolly Daskal",
"All progress takes place outside the comfort zone. ~Michael John Bobak",
"When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid. ~Audre Lorde",
"A man can be as great as he wants to be. If you believe in yourself and have the courage, the determination, the dedication, the competitive drive and if you are willing to sacrifice the little things in life and pay the price for the things that are worthwhile, it can be done. ~Vince Lombardi"]
