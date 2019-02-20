const getMatch = (partnerA, partnerB) => {
  let matchState = { matchNumber: "", matchState: 0, shortNote: "" };
  let matchnumber = "";
  if (partnerA < partnerB) {
    matchnumber = partnerA + "_" + partnerB;
  } else {
    matchnumber = partnerB + "_" + partnerA;
  }

  switch (matchnumber) {
    case "1_3":
      matchState.matchNumber = "1_3";
      matchState.matchState = 4;
      matchState.shortNote =
        "This is a very lively couple and there is little negative to say about this combination .The 3 is good at acknowledging the 1's accomplishments and stroking the ego. The creative 3 provides the ideas and the light-hearted, anything goes attitude, while the 1 provides the originality and the push, making this combination one of happiness and mutual pleasure for a long time. Despite the positive aspects, there are some pitfalls they have to be careful about, but overall this is a well balanced combination.";
      break;

    case "1_5":
      matchState.matchNumber = "1_5";
      matchState.matchState = 4;
      matchState.shortNote =
        "The compatibility of these two numbers is about as good as it gets. There will never be any danger of boredom, complacency, or emptiness in a relationship that has heads turning and people whispering. Both of these numbers like to have a lot of freedom in a relationship, and the one real threat is they try to impose their will on one another. The personality traits in this combination can both create and destroy, but like wind and fire, the one and five feed on each other and respect each other's powers, and when they set out side by side to fulfill their goals and dreams, nothing can withstand their combined forces. This is a relationship of intensity and moments of rarely achieved highs, where the promise of ecstatic experiences of love, spiritual bonding and shared dreams is very real.";
      break;

    case "1_2":
      matchState.matchNumber = "1_2";
      matchState.matchState = 3;
      matchState.shortNote =
        "This meeting of two very different people is a very promising combination, with the key being mutual respect and sincerity. 1, being strong, driven, competitive, and sometimes overbearing, is best equipped to be the leader, to be the motivating force. The 2, being sensitive, insightful and supportive, is by nature the 'power behind the throne', allowing the 1 to throw some weight around without losing sight of what has to be done and how to do it. There is no power struggle, both of you know what you want, and you complement each other very well.";
      break;

    case "1_6":
      matchState.matchNumber = "1_6";
      matchState.matchState = 3;
      matchState.shortNote =
        "This is a combination that has the potential for a long lasting relationship, without ever going through the kind of turbulence so many other relationships experience. The important thing for both 1 and 6 is to understand that they are very different in the way they view human qualities. Their priorities differ and if they are able to keep an eye open for their differences, and are able to work past this roadblock, this can be a successful pairing ...the key is to value their respective good qualities, and give each other the support they both need.";
      break;

    case "1_1":
      matchState.matchNumber = "1_1";
      matchState.matchState = 2;
      matchState.shortNote =
        "Both of you are head strong, with a strong desire to lead, which can make this a challenging combination. Even though as One’s you might understand each other’s needs, and share things in common, in this case this is not necessarily an advantage. This is a relationship of extremes with either partner refusing to surrender their leadership qualities, and the match can get dicey, especially when they start to compete, particularly at the onset of the relationship. Despite this “butting of heads”, when two people with such driving forces do get along, and their mutual competitive streaks are overcome, this can be a very promising combination.";
      break;

    case "1_7":
      matchState.matchNumber = "1_7";
      matchState.matchState = 2;
      matchState.shortNote =
        "1 and 7, your compatibility is unpredictable … some relationships between one's and seven's thrive while others don't stand a chance. The initial connection in this combination is usually intellectual - a level where you can relate and have plenty to share. 1's a willingness to get off the beaten path, and an open and unconventional mind make for a great intellectual partnership with 7. You are two people who happily venture into new, strange or unknown intellectual and spiritual territories, and if you happen to click this can lead to a very promising combination. Free thinkers, for very different reasons, driven by very different perspectives, and with very different energies, somehow blend nicely to make a nice, spicy recipe.";
      break;

    case "1_9":
      matchState.matchNumber = "2";
      matchState.matchState = 2;
      matchState.shortNote =
        "Due to the fact that both of you have a tendency towards arrogance, as well as to being somewhat egocentric, this is a very difficult relationship, as far as romance is concerned. It will only work if a certain amount of distance is maintained. Each of you has to live your own life. Ironically, although difficult, this is not a bad combination for most other kinds of relationships. Friendships, parent-child, as well as business relationships, often work very well with this combination. 1 and 9 stand on opposite ends of the spectrum … they complement and balance each other. Together, they represent a lot of talents and useful qualities that ensure a powerful combination in most relationships, except in romance.";
      break;

    case "1_4":
      matchState.matchNumber = "1_4";
      matchState.matchState = 1;
      matchState.shortNote =
        "One's and Four's strengths can make for a solid relationship for a long a long time only to crash and burn in the blink of an eye. This can be a thriving relationship as long as 1 doesn't start on a path of unknowns and risky, questionable results. However, that will unavoidably happen and 4 will at times be seen as a stick in the mud, a source of frustration for 1. When this kind of situation becomes overwhelming, it will almost certainly bring this relationship to an end. On the other hand, as long as 1 is able to respect 4's need for a secure, perhaps even predictable, lifestyle, and 4 can understand 1's need to try new avenues, take risks, occasionally venture out into unknown territories, the relationship can endure.";
      break;

    case "1_8":
      matchState.matchNumber = "1_8";
      matchState.matchState = 1;
      matchState.shortNote =
        "From the love angle, this combination is questionable at best. Both of you are strong willed, assertive and demanding, while at the same time stubborn people … it's like having two captains on deck … which leads to uneasiness, discomfort and distress. Neither one of you accepts anything less than full respect and an equal playing field, and neither one of you can be dominated or would accept being someone's sidekick. Even though both of you may share many common interests, any negative feedback from either of you can be deadly in this pairing. Success depends on a mutual willingness to compromise and limit demands, otherwise small arguments can be blown out of proportion.";
      break;

    case "2_2":
      matchState.matchNumber = "2_2";
      matchState.matchState = 4;
      matchState.shortNote =
        "This is a great match of two souls who have a healthy respect for the power of feelings and emotions. You should have little difficulty finding common ground on just about any issue that might arise. The only word of caution for this pairing is that as two people who feel and experience emotions strongly, they must each remember how thin their own skin and realize how vulnerable you both are to criticism. You may need to consciously work on this in order to prevent verbal injury to one other. Generally this is not a problem because of your mutual respect and the ability to relate to each other's emotional experiences.";
      break;

    case "2_4":
      matchState.matchNumber = "2_4";
      matchState.matchState = 4;
      matchState.shortNote =
        "Although perfection is not easy, if not impossible to find, and your relationship, just like any other is not without difficulty, this is one of the best combinations possible. This is a good pairing resulting in comfort personified. When it comes to home and family, the 4 is the ultimate builder and provider. 4's grounded and practical perspective complements the 2's sensitive and intuitive side, bringing a healthy balance to the relationship.";
      break;

    case "2_8":
      matchState.matchNumber = "2_8";
      matchState.matchState = 4;
      matchState.shortNote =
        "This number combination usually works out well. Because it is likely that each of you has a clear vision of your role, this relationship is often seen as the classic traditional family model, where the female 2 takes care of the family, and the male 8 takes care of the financial needs ... or in the case of the male being a 2 and female an 8, the classic male/female role reversal. Regardless of the roles, this combination's qualities can produce a balanced relationship, and when these two unite their individual strengths, you have the potential of a rewarding relationship that lasts for years and years.";
      break;

    case "2_3":
      matchState.matchNumber = "2_3";
      matchState.matchState = 3;
      matchState.shortNote =
        "More often than not, the combination of 2 and 3 enhances each other's creative juices, potentially making this is a very good partnership. While the 3 is full of life and social energy, the 2 is happy standing back and enjoying the show, and as long as the 3 can keep its verbal impulses under control, and the 2 has enough confidence to handle occasional criticism, the relationship has every chance of bringing love and joy to both of you.";
      break;

    case "2_6":
      matchState.matchNumber = "2_6";
      matchState.matchState = 3;
      matchState.shortNote =
        "This is in general a good compatibility match. The 6's priorities lie with family, to care for and comfort your loved ones, while the 2 is a sensitive, emotionally aware number, enabling you both to love easily and without holding back, forming a strong foundation for a long lasting relationship. Despite these common traits that bring a positive energy to your relationship, you both need to watch your own negative traits, such as 6's need for approval and praise, or 2's insecurity and occasional bouts of jealousy and envy. With these under control, and with considerations of feelings for each other on both sides, the likely hood of a crash is less likely than in most other number combinations";
      break;

    case "2_7":
      matchState.matchNumber = "2_7";
      matchState.matchState = 2;
      matchState.shortNote =
        "This is a unique combination that has both strong and dissimilar needs, a combination where intuition meets intelligence, sensitivity meets analysis, and the heart meets the mind. Although these two numbers rarely express interest in one another, when they do, the result can often lead to a relationship that's welded for life.";
      break;

    case "2_5":
      matchState.matchNumber = "2_5";
      matchState.matchState = 1;
      matchState.shortNote =
        "This is a combination where the chemistry has to be very strong in order for the two very different souls to forge some significant compromises. Like fire and water, when 2 and 5 occupy the same space, either the fire makes the water evaporate, or the water drowns out the fire. Although the two numbers can provide a lot for one another that may otherwise be missing, it is not an easy road, and in general, when the 2 and 5 are in the same part of the numerological chart, it makes for a short lived relationship.";
      break;

    case "2_9":
      matchState.matchNumber = "2_9";
      matchState.matchState = 1;
      matchState.shortNote =
        "This combination of numbers doesn't get along two well in terms of romantic compatibility. Despite both being loving and caring numbers, the 9's focus is on the world, and the care they naturally possess is shared with all of humanity, while the 2's emotions like to be focused on the one single person they love. Generally speaking, the 2 and a 9 can form successful alliances in other circumstances, such as a business partnership, but when it comes to the needs and desires of their heart, you will need much effort to make it work.";
      break;

    case "3_5":
      matchState.matchNumber = "3_5";
      matchState.matchState = 4;
      matchState.shortNote =
        "The 3 and the 5 get along very well, making this is an excellent combination. You both communicate well, and the two of you will generally find each other's company interesting and enjoyable. Numerous activities, such as social events and travel, will keep this relationship from getting boring. The downfall, or rather dangers, of this pairing is because you are so compatible, you may end up enhancing each other's less desirable traits.";
      break;

    case "3_3":
      matchState.matchNumber = "3_3";
      matchState.matchState = 3;
      matchState.shortNote =
        "Happy go lucky, interesting, and creative ... describes this pairing of two numbers who joke easily, and know how to please each other, while at the same time being able to enjoy each other's company within your dynamic social environment. This is a fun pair that understands and supports one another. Troubles might arise, however, when the question becomes as to who is going to take care of the mundane tasks. You both have a tendency to skim over the rough spots, and when fun and joy become too high a priority and neither partner is willing, or able, to take care of the practical everyday details, this can destabilize the foundations and bring friction to your relationship.";
      break;

    case "3_6":
      matchState.matchNumber = "3_6";
      matchState.matchState = 3;
      matchState.shortNote =
        "This combination is a creative couple, with an active social life. The 3, full of enthusiasm and sense of humor, and the 6 providing the warmth, support, and self sacrificing love, makes this combination an ideal team that will work well in most cases. The chemistry here is very strong, but while there is no lack of emotion, the pitfall here is the possibly excessive emotional bond experienced by the 6. Usually it will be the 6 who will have to learn to deal with this inborn trait, and allow the 3 enough space and freedom to move and breathe.";
      break;

    case "3_9":
      matchState.matchNumber = "3_9";
      matchState.matchState = 3;
      matchState.shortNote =
        "The pairing of a 3 and a 9 is a combination of two people who, through their powerful imaginations, are able to keep each other endlessly engaged in a variety of creative ways. Despite the occasional self-centered and egocentric tendency of both numbers, this combination reflects excellent compatibility. The problem the couple faces is when they are both vying for the same limelight, and despite the fact that privately they respect and like each other, they can become very competitive, in which case they will do almost anything to win.";
      break;

    case "3_4":
      matchState.matchNumber = "3_4";
      matchState.matchState = 2;
      matchState.shortNote =
        "The pairing of 3 and 4 can lead to either a promising, or a very difficult and challenging combination. When the spontaneous 3 pairs with the grounded 4, something has to give, and often it won't. The 3 is an optimistic, fun loving number, one of go with the flow attitude that takes each day as it comes. The 4 on the other hand is more disciplined, practical, and has a definite plan for the future. If the two of you can ever figure out how to meet in the middle, and balance each other's shortcomings, this can be a good combinations. However, when life becomes a challenge and wordly problems arise, the 3 and 4 are a pair least prepared to deal with them.";
      break;

    case "3_8":
      matchState.matchNumber = "3_8";
      matchState.matchState = 2;
      matchState.shortNote =
        "This is a combination where the number set is compatible in some areas and incompatible in others, therefore, this relationship requires a bit of extra effort. Because of the 3 and the 8 having very different views as to what is important in life, unless they learn to respect each other's needs and expectations, the relationship will not last long. Despite this, because you complement each other well, more often than not, you can get along very well and can be quite compatible.";
      break;

    case "3_7":
      matchState.matchNumber = "3_7";
      matchState.matchState = 1;
      matchState.shortNote =
        "These two make up an interesting combination, one of two very different types of people. The 3 is restless, energetic, and constantly on the go, with a swirl of activity, travel, and social contact which the 7 usually finds intolerable. The 7 needs quiet and solitude to recharge, and can only take so much human contact before retreating to their place of peace and quiet. Confrontation in this pairing never works well, and because of the different natures of the 3 and the 7, this is a relationship that can either last for a couple of weeks, or remain exciting and strong for a lifetime.";
      break;

    case "4_8":
      matchState.matchNumber = "4_8";
      matchState.matchState = 4;
      matchState.shortNote =
        "Because both parties know how to work hard, and have a good head for getting ahead in the world, this is a very good combination, not only in romance, but also in business. This is a couple that knows how to build for the future and develop a very secure relationship. Like in any other number combination, dangers do exist, and feelings of frustration can overshadow the love and respect that is the foundation of this relationship, but overall this is an excellent number pairing.";
      break;

    case "4_6":
      matchState.matchNumber = "4_6";
      matchState.matchState = 3;
      matchState.shortNote =
        "Despite the common traits shared by this pairing, it is usually not very common for these two numbers to fall in love. However, because you are both responsible and family oriented, and you both value stability and security, if you do get involved in a romantic relationship, it is usually a strong, comfortable match straight from the beginning, with potential to last for a life time.";
      break;

    case "4_7":
      matchState.matchNumber = "4_7";
      matchState.matchState = 3;
      matchState.shortNote =
        "This combination is one in which the earth meets the heaven, and just like earth and heaven, the two of you can't exist without one another. There are some sharp angles that will need to be rounded off, but this pairing, which makes life both secure and at the same time more interesting for both of you, can much more easily overcome the challenges inherit in every relationship.";
      break;

    case "4_4":
      matchState.matchNumber = "4_4";
      matchState.matchState = 2;
      matchState.shortNote =
        "This is a stable pairing; however, because of the nature of the 4, you both tend to get somewhat irritated when established routine is disturbed. This can lead to a relationship that is either very good, or extremely stressful, with little room in the middle, and so the compatibility can depend largely on how compatible your daily routines are. Upside of this pairing is stability and security ... the downside is that it is hard to relax, be spontaneous, and enjoy the moment.";
      break;

    case "4_5":
      matchState.matchNumber = "4_5";
      matchState.matchState = 1;
      matchState.shortNote =
        "In short, this is a challenging combination. The 4 and the 5 are each other's polar opposites. 4 likes routine and predictability, 5 prefers change and unexpected, and the only way this pairing can survive is if you accept each other as you are, respect your differences, and don't try to change your partner.";
      break;

    case "4_9":
      matchState.matchNumber = "4_9";
      matchState.matchState = 1;
      matchState.shortNote =
        "The successful pairing of these two numbers is very rare, and important differences will have to be addressed and accepted by both of you if you want this relationship to last. The two numbers usually don't connect, and rarely see eye to eye. If you have a successful relationship, this usually indicates that other numbers in your numerological chart play a significant enough of a role to overcome this particular incompatible combination.";
      break;

    case "5_7":
      matchState.matchNumber = "5_7";
      matchState.matchState = 4;
      matchState.shortNote =
        "This is a combination of two numbers that can fulfill each other's needs and desires in many ways. The 7 enjoys its alone time, and the 5 is a busy body that appreciates the lack of demands for attention from its partner. When together, the pairing is able to find a stream of mutual interests to discuss and explore, particularly on the intellectual and spiritual planes, making this one of the best combinations for a long lasting relationship.";
      break;

    case "5_5":
      matchState.matchNumber = "5_5";
      matchState.matchState = 3;
      matchState.shortNote =
        "The two 5s form a very comfortable match. This is a relationship that is tolerant, easy going and flexible, and in which both of you take your commitment to each other seriously, allowing you to weather many storms. The dangers of this pairing come from within, and it is the adventurous, freewheeling lifestyle, which is normally a plus, that can cause difficulty in focusing on the mundane day-to-day affairs, and can lead to somewhat of a wild streak that can include drugs, alcohol, and other such vices.";
      break;

    case "5_6":
      matchState.matchNumber = "5_6";
      matchState.matchState = 2;
      matchState.shortNote =
        "This combination of numbers is a match that is usually very physical and sensual. The 5s freedom loving nature and 6s grounding force can complement each other well, but only if both of you are willing to compromise. If you can find a way to meet in the middle, avoid the tendency to become stuck in your individual positions, and live a lifestyle that is in harmony with that of your partner, this can be a promising relationship.";
      break;

    case "5_8":
      matchState.matchNumber = "5_8";
      matchState.matchState = 1;
      matchState.shortNote =
        "Romantically, this is not a very good match. Your individual qualities and interests rarely overlap, and while the 5 is dynamic and likes freedom from rules and restraints, the 8 is a strong authoritative figure used to being the boss. It will take careful planning and compromise, and roles that are very different and far apart, for this relationship to work.";
      break;

    case "5_9":
      matchState.matchNumber = "5_9";
      matchState.matchState = 1;
      matchState.shortNote =
        "There is very little that these two numbers have in common. 9 perceives the 5s love of freedom as irresponsible, while the idealism of the 9 appears superficial to the 5. If you are in a relationship, it would suggest that other numbers in your numerological chart are responsible for the attraction between the two of you. You will need to compromise and be much more diplomatic than other number sets in order for this match to be successful.";
      break;

    case "6_6":
      matchState.matchNumber = "6_6";
      matchState.matchState = 4;
      matchState.shortNote =
        "This is a very good, highly committed number pairing. Just like in any other relationship, there will come a time when obstacles will need to be overcome, however, because of the harmonious and loving nature of the 6, this is a combination charged with romance, and one that has a very good chance to form a strong, long lasting romantic relationship.";
      break;

    case "6_9":
      matchState.matchNumber = "6_9";
      matchState.matchState = 4;
      matchState.shortNote =
        "When 6 and 9 are found between two partners, the compatibility is usually very good. It is important that your respective negative traits aren't allow to grow and fester, creating an environment where you are more likely to clash. The give and take compromise is something you will need to do, in order to prevent unnecessary arguments from escalating, but because both of you are self-sacrificing, caring people, this is something that is not hard for either of you to do. Overall this is a highly compatible match.";
      break;

    case "6_8":
      matchState.matchNumber = "6_8";
      matchState.matchState = 3;
      matchState.shortNote =
        "The practical, goal oriented, and responsible nature of these two numbers makes this a very positive and compatible pairing. The dangers lay in the different ways the 6 and the 8 view responsibility, and how they go about accomplishing their goals. The 6 is more oriented on family and friends, while the 8 is more focused on the executive lifestyle and the obligations that come with it. Despite these differences, the combination is all together a very good match.";
      break;

    case "6_7":
      matchState.matchNumber = "6_7";
      matchState.matchState = 2;
      matchState.shortNote =
        "Because the 6 and the 7 represent very two different people, with very different ideas, this is generally a challenging combination. 7s secretive and 'aloof' nature, with the need for certain amount of distance, doesn't bode well with the 6s need for open expressions of love and emotions. This can cause a rift where the 6 feels insecure about the relationship, while the 7 experiences the 6s loving attention as an annoying disruption ... creating an atmosphere of a typical love-hate relationship.";
      break;

    case "7_7":
      matchState.matchNumber = "7_7";
      matchState.matchState = 4;
      matchState.shortNote =
        "No one understands the psyche of a 7 nearly as well as another 7. This is an excellent combination of two people who take life's mysteries seriously. With the right attitude, you will happily explore the world, or spend quiet days in solitude together. This is a beautiful pairing with potential for spiritual growth for both partners, and one where the term 'soul mates' often applies.";
      break;

    case "7_9":
      matchState.matchNumber = "7_9";
      matchState.matchState = 2;
      matchState.shortNote =
        "This combination is somewhat neutral as far as compatibility is concerned. There is neither like nor dislike between you two. Discourse can arise when your positions on religion and spirituality are not in harmony with one another, or when your different tastes in general are questioned by one another. On the plus side, because of your unique energies, there is otherwise rarely any kind of friction, and conflicts are dealt with reasonably.";
      break;

    case "7_8":
      matchState.matchNumber = "7_8";
      matchState.matchState = 1;
      matchState.shortNote =
        "These two numbers neither attract nor repel one another, and it is most common that this pairing is based more on the physical rather than the emotional. The 7s aversion against the 8s tendency to control, and the 8s preference of practical matters as opposed to the 7s philosophical and spiritual nature can lead to frequent verbal battles. This is a combination where your attraction is most likely based on other numbers in you numerological chart.";
      break;

    case "8_8":
      matchState.matchNumber = "8_8";
      matchState.matchState = 4;
      matchState.shortNote =
        "This is a good pairing, not only in romance, but also in business. Having two 8s in a relationship puts each of you in a position where you are well suited to support each other. The pitfalls arise when you find yourselves competing with one another, or when you are both financially strapped. If you are able to unite your competitive natures against other forces, and follow your heart and intuition in the pursuit of success, this pairing has a strong chance of a long and happy relationship.";
      break;

    case "8_9":
      matchState.matchNumber = "8_9";
      matchState.matchState = 1;
      matchState.shortNote =
        "This number pairing is not considered very compatible at all. Your goals are very different and you'll frequently find yourselves on the opposite spectrum of a discussion. Although there is often a strong attraction that can form the foundation for an interesting relationship, the only way this pairing will last is if both of you recognize and respect the big differences between one another.";
      break;

    case "9_9":
      matchState.matchNumber = "9_9";
      matchState.matchState = 4;
      matchState.shortNote =
        "The compatibility between two 9s is excellent, and offers much promise for a very happy, inspiring, and engaging relationship. The many similarities, coupled with the selfless nature of the 9, make for a combination that faces very few challenges. Despite some pitfalls that may exist, this number set has great potential to form an unbreakable bond ... one that will not weaken over time.";
      break;

    default:
      break;
  }

  return matchState;
};

export default getMatch;
