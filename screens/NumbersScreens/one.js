import React, { Component } from "react";
import { Text, ScrollView, Image, StyleSheet } from "react-native";

class NumberOne extends Component {
  state = {};
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        alwaysBounceHorizontal={true}
        alwaysBounceVertical={true}
      >
        <Text style={styles.getStartedText}>
          <Text style={{ fontWeight: "bold" }}> Ones</Text> are pioneers, they
          find the way for others to follow and succeed where lesser mortals
          fear to tread. Second fiddle just won’t do for these powerful men and
          women; they will only be content when conducting the entire orchestra
          in a symphony of their own composition – and then not for long.
        </Text>
        <Text style={styles.getStartedText}>
          Most need no encouragement to spur them on and trying to give advice
          to a number One does about as much good as banging your head against a
          brick wall. If he’s engrossed in some new venture, he probably hasn’t
          even sensed your presence. However, should you mange to break through
          his concentration for a moment, and can persuade him to explain what
          he’s so absorbed in, the audacity of his plans will probably leave you
          speechless.
        </Text>
        <Text style={styles.getStartedText}>
          Any criticism you may make of his ideas, no matter how sound or well
          meaning, will only fall upon deaf ears. He does everything on a grand
          scale – the bigger, the more unusual and the more improbable the
          better. He is one person who can take a potentially disastrous
          situation, usually of his own making, and somehow emerge as the
          victor.
        </Text>
        <Text style={styles.getStartedText}>
          Once launched on a plan of action, Ones are powerhouses of energy.
          They work untiringly all day and most of the night. Sleep couldn’t
          possibly be allowed to interfere with their efforts.
        </Text>
        <Text style={styles.getStartedText}>
          Ones can never be content until they have fought their way to the top
          in their chosen field and, once firmly seated in the boss’s chair,
          they generally mange to keep their hard-won position of power and
          authority. They are usually much respected and admired by their staff
          for their sheer determination, if not actually loved. They keep a very
          tight rein on everything and everyone under their control, always
          knowing what needs to be done at given moment and who best to do it,
          especially in a crisis when everyone else seems to be losing their
          heads.
        </Text>
        <Text style={styles.getStartedText}>
          These capable individuals take their responsibilities seriously, never
          side stepping difficulties and never giving in when the going gets
          tough. They work hard and expect the same from their subordinates – a
          half-heated effort is one thing they simply won’t tolerate.
        </Text>
        <Text style={styles.getStartedText}>
          When it comes to choosing a career, Ones should try to ensure that
          their innate creativity and originally can be used to the full –
          boring, routine jobs are for them. They need plenty of opportunity for
          advancement as, without a challenge, they will soon lose interest and
          find themselves looking around for something more stimulating. The
          most obvious choices of career are as designers, inventors or
          engineers of one kind or another. Ones also like ‘to boldly go where
          no man has gone before’ but, unfortunately, openings for explorers are
          rather few and far between these days although some universities do
          offer research grants which might appeal to their sense of adventure.
        </Text>
        <Text style={styles.getStartedText}>
          From a negative viewpoints, One is traditionally known as the number
          of tyrants and people whose date of birth reduces to this number are
          quite capable of tyrannical behaviour when I come to getting their own
          way – so be prepared for fireworks if you ever try to thwart the best
          laid plans of mice, men or number Ones! Stubbornness and an intense
          dislike of restraint are also firmly engrained in their character,
          along with impatience, intolerance and, occasionally, in later life, a
          tendency towards eccentric behaviour.
        </Text>
        <Text style={styles.getStartedText}>
          In private our monarchs of the glen need to love and be adored in
          return. There’s no more pitiable a sight than a One who has been
          spurned. He’ll probably say he’s feeling under the weather or has
          something on his mind when really he’s trying to hide his wounded
          pride. These people have tremendous egos and to be cast aside by their
          loves is more than they can bear, however, their natural resilience
          seldom allows them to remain downcast for long.
        </Text>
        <Text style={styles.getStartedText}>
          Once they have finally chosen a partner, usually after several
          traumatic false starts, Ones prove to be loyal, devoted spouses with a
          deep sense of responsibility of their partners and families. They are
          generous, caring and sincere in return for which they expect nothing
          less than admiration, flattery, appreciation and total obedience. They
          can be utterly ruthless if they so much as suspect their mate of
          infidelity and it goes without saying that they always have to have
          the last word in any argument. Ones of both sexes are charming,
          physically demonstrative and make exciting bed-fellows.
        </Text>
        <Text style={styles.getStartedText}>
          The female of the species is a liberated lady. She lives her life to
          the full and is seldom content to stay at home and keep house – she is
          ambitious and demands more from life than that. She needs excitement,
          luxury and pleasure because she’s sophisticated, elegant, witty and
          certainly not modest. She knows that she deserves the very best … and
          somehow she’ll get it.
        </Text>
        <Text style={styles.getStartedText}>
          She’s certainly not afraid of rejection because once her sights are
          set on a man she is apt to take the initiative and ask him out to
          dinner, which on her salary she can easily afford to do.
        </Text>
        <Text style={styles.getStartedText}>
          These royal ladies, like their male counterparts, need to be the
          constant centre of attraction. Should her mate prove guilty of a
          moment’s neglect or an inconsiderate action she will sulk and make his
          life a misery until her anger has abated. It takes a strong man to
          tame this lady but, once tamed, she’ll remain his for life … and it
          won’t be dull.
        </Text>
        <Text style={styles.getStartedText}>
          Colour plays an important role in our lives and Ones should go for
          gold as well as all the various shades of yellow (orange included),
          right through to the richest browns. To add contrast they could
          consider purples, blues and deep pinks but green, black and grey are
          definitely out as far as they are considered. Their choice of gemstone
          should be limited to yellow stones such as citrine, topaz, amber and
          yellow diamond (to suit their rich tastes) with, naturally, a gold
          setting.
        </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    flex: 1,
    width: "90%",
    alignItems: "center"
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    width: "90%",
    padding: 5
  }
});

export default NumberOne;
