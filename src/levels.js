import React from 'react';
import {Level, levelButton} from './level';
import {LevelContent, Location} from './game_components';
import {Buttons} from './buttons';

export class LevelBox extends React.Component {
    render() {
        let currentLevel = this.props.game.state.currentLevel;
        return (
            <div className='lvl-box'>
                <Location
                    text={(currentLevel !== null) ? currentLevel.loadLevel(this.props.game) : '...'}
                />
                <LevelContent
                    game={this.props.game}
                    currentLevel={currentLevel}
                />
                <Buttons
                    game={this.props.game}
                    currentLevel={currentLevel}
                />
            </div>
        );
    }
}

export var Levels = {

    Intro1: new Level('Home (bedroom)', () => {
        let text = `England.
        Summer 1984.
        Today,
        9th July,
        is the big day.
        Finally,
        after years of daydreaming,
        you are going to present a demo of your game at the biggest gaming development company in the UK:
        Tuckersoft.
        But first, breakfast.
        `;
        return text;
    }, [
        new levelButton('Go to the kitchen', (game) => {
            game.nextLevel(Levels.Intro2);
        })
    ], 'bed_retro.png'),

    Intro2: new Level('Home (kitchen)', () => {
        let text = `
            DAD:
            Here's your tea. (After 10 seconds)
            "Thanks, Dad."
            STEFAN:
            Sorry dad,
            I was miles away.
            Got to get everything ready for today.
            DAD:
            This thing with some computer people?
            STEFAN:
            Yeah, Tuckersoft.
            They do Colin Ritman's games.
            Mr. Thakur,
            the owner,
            said I could show them my Bandersnatch demo.
        `;
        return text;
    }, [
        new levelButton('Next', (game) => {
            game.nextLevel(Levels.Intro3);
        })
    ], 'kitchen_retro_cut.png'),

    Intro3: new Level('Home (kitchen)', () => {
        let text = `
            DAD:
            Your Bander-what?
            STEFAN:
            Bandersnatch,
            I've based it on the book.
            DAD:
            Was that your mother's?
            STEFAN:
            It was in her things, yeah.
            DAD:
            Don't know if she read it though.
            STEFAN:
            Don't think so.
            DAD:
            Well, the book can't be good.
            I mean,
            you're always flicking backwards
            and forwards in that.
        `;
        return text;
    }, [
        new levelButton('Next', (game) => {
            game.nextLevel(Levels.Breakfast);
        })
    ], 'bandersnatch_retro.png'),

    Breakfast: new Level('Home (kitchen)', () => {
        let text = `
            STEFAN:
            No,
            It's a "Choose Your Own Adventure" book.
            You decide what your character does.
            DAD:
            Sounds thrilling.
            What you want for your breakfast?
            Both seem a bit kiddywink to me,
            but you will insist.
        `;
        return text;
    }, [
        new levelButton('Frosties', (game) => {
            game.nextLevel(Levels.BreakfastF);
        }),
        new levelButton('Sugar puffs', (game) => {
            game.nextLevel(Levels.BreakfastS);
        })
    ], 'cereals_retro.png'),

    BreakfastF: new Level('Home (kitchen)', () => {
        let text = `
            STEFAN:
            I'll go with the Frosties.
            DAD:
            There you go.
            STEFAN:
            Thanks, dad!
            (Nom, nom, nom)
            DAD:
            Hurry up!
            You are gonna miss the bus.
        `;
        return text;
    }, [
        new levelButton('Go to the bus', (game) => {
            game.nextLevel(Levels.Bus);
        }),
    ], 'frosties_retro_cut.png'),

    BreakfastS: new Level('Home (kitchen)', () => {
        let text = `
            STEFAN:
            Hmmm,
            I feel it's a Sugar Puffs kinda day.
            DAD:
            Sugar Puffs then.
            STEFAN:
            Thank you!
            (Nom, nom, nom)
            I better hurry up,
            the bus is leaving in 15 minutes.
        `;
        return text;
    }, [
        new levelButton('Go to bus stop', (game) => {
            game.nextLevel(Levels.Bus);
        }),
    ], 'sugar_puffs_retro_cut.png'),

    Bus: new Level('Bus', () => {
        let text = `
            Finally on the bus.
            Destination:
            A bright future?
            Or not?
            Argh! I am so nervous.
            I need to chill.
            Let's listen to some music.
            (You take the cassette player out of your backpack
            along with a couple of cassettes)
        `;
        return text;
    }, [
        new levelButton('Thomson Twins', (game) => {
            game.nextLevel(Levels.BusT);
        }),
        new levelButton('Now 2', (game) => {
            game.nextLevel(Levels.BusN);
        })
    ], 'music_retro.png'),

    BusT: new Level('Bus', () => {
        let text = `
            (Stay with me, let loving start... 🎶)
            LET LOVING START... 🎶
        `;
        return text;
    }, [
        new levelButton('Get out', (game) => {
            game.nextLevel(Levels.Tuckersoft1);
        }),
    ], 'bus_retro.png'),

    BusN: new Level('Bus', () => {
        let text = `
            (Playing side B of "Now That's What I Call Music! 2")
            Hmm,
            the title is pretty accurate.
        `;
        return text;
    }, [
        new levelButton('Get out', (game) => {
            game.nextLevel(Levels.Tuckersoft1);
        }),
    ], 'bus_retro.png'),

    Tuckersoft1: new Level('Tuckersoft headquarters', () => {
        let text = `
            Finally here! Woah!
            It's bigger than I thought!
            (That's what she said!)
            Well, Tuckersoft is known as the "Motown of Gaming"
            after all.
            I don't know if I can do this...
        `;
        return text;
    }, [
        new levelButton('Go back home', (game) => {
            game.nextLevel(Levels.TuckersoftOut1);
        }),
        new levelButton('Go inside', (game) => {
            game.nextLevel(Levels.Tuckersoft2);
        }),
        new levelButton('Smoke a cigarette', (game) => {
            game.nextLevel(Levels.TuckersoftOut2);
        }),
    ], 'tuckersoft_retro.png'),

    TuckersoftOut1: new Level('Tuckersoft headquarters', () => {
        let text = `
            What am I doing here?
            I should go back home.
            I don't belong here...
            NO!
            I CAN DO THIS!
            I WILL DO THIS!
        `;
        return text;
    }, [
        new levelButton('Enter the building', (game) => {
            game.nextLevel(Levels.Tuckersoft2);
        }),
    ], 'office_out_retro_cut.png'),

    TuckersoftOut2: new Level('Tuckersoft headquarters', () => {
        let text = `
            This is what I needed...
            Ok!
            Let's do this!
        `;
        return text;
    }, [
        new levelButton('Enter the building', (game) => {
            game.nextLevel(Levels.Tuckersoft2);
        }),
    ], 'cigarette_retro_cut.png'),


    Tuckersoft2: new Level('Tuckersoft headquarters', () => {
        let text = `
            MR. THAKUR:
            You...
            are...
            Steven.
            STEFAN:
            Stefan.
            MR. THAKUR:
            Stefan!
            Sorry, mate.
            Let's meet Colin
            STEFAN:
            Colin Ritman!?
            MR. THAKUR:
            Yeah, he's over there.
            STEFAN:
            That's crazy.
            I've played all of his games.
        `;
        return text;
    }, [
        new levelButton('Meet Colin', (game) => {
            game.nextLevel(Levels.Tuckersoft3);
        }),
    ], 'thakur_retro_cut.png'),

    Tuckersoft3: new Level('Tuckersoft headquarters', () => {
        let text = `
        MR. THAKUR:
        This is Stefan, er...
        STEFAN:
        Butler
        COLIN:
        I'm Colin, yeah?
        STEFAN:
        I know! I've played all of your games.
        MR. THAKUR:
        Stefan's got something to demo for us.
        `;
        return text;
    }, [
        new levelButton('Show demo', (game) => {
            game.nextLevel(Levels.Tuckersoft4);
        }),
    ], 'office_retro.png'),

    Tuckersoft4: new Level('Tuckersoft headquarters', () => {
        let text = `
        STEFAN:
        So, it's an adventure game.
        COLIN:
        Like the Hobbit?
        STEFAN:
        But without typing.
        MR. THAKUR:
        Without typing!?
        COLIN:
        Amazing!
        MR. THAKUR:
        It's July now,
        so if we want to hit Christmas,
        then we'll need it ready by December.
        So here's my proposal.
        Come and write it here.
        `;
        return text;
    }, [
        new levelButton('Accept', (game) => {
            game.nextLevel(Levels.Accept);
        }),new levelButton('Refuse', (game) => {
            game.nextLevel(Levels.Refuse);
        }),
    ], 'demo_retro_cut.png'),

    Accept: new Level('Tuckersoft headquarters', () => {
        let text = `
            STEFAN:
            Ok, yeah!
            Thank you Mr. Thakur!
            You won't regret it!
            MR. THAKUR:
            Perfect!
            We'll give you a couple of desks and set up a small team, just for you
        `;
        return text;
    }, [
        new levelButton('Develop game', (game) => {
            game.nextLevel(Levels.Accept2);
        }),
    ], 'handshake_retro.png'),

    Accept2: new Level('Tuckersoft headquarters', () => {
        let text = `
            ...
        `;
        return text;
    }, [
        new levelButton('Next', (game) => {
            game.nextLevel(Levels.End1);
        }),
    ], 'wrong_path.gif'),

    End1: new Level('Home (living room)', () => {
        let text = `
            (Five months later)
            TV HOST #1:
            The next game to be reviewed is Bandersnatch,
            in which the player navigates through parallel realities.
            TV HOST #2:
            That's how it works,
            but did it "snatch" your respect?
            TV HOST #1:
            I'm afraid not,
            as it's over before it's even begun.
            TV HOST #2:
            And your verdict?
            TV HOST #:
            No stars out of five.
        `;
        return text;
    }, [
        new levelButton('Try again', (game) => {
            game.nextLevel(Levels.TryAgain1);
        }),
    ], 'rating_no_retro_cut.png'),

    TryAgain1: new Level('Home (living room)', () => {
        let text = `
            No stars out of five?
            I should try again!
        `;
        return text;
    }, [
        new levelButton('Do it!', (game) => {
            game.nextLevel(Levels.TryAgain2);
        }),
    ], 'try_again.gif'),

    TryAgain2: new Level('Time machine', () => {
        let text = `
            (Traveling back to July 9, 1984)
        `;
        return text;
    }, [
        new levelButton('Next', (game) => {
            game.nextLevel(Levels.Intro1);
        }),
    ], 'time_machine_retro_cut.png'),

    Refuse: new Level('Tuckersoft headquarters', () => {
        let text = `
            STEFAN:
            NO!
            I mean, yeah...
            It's just that I need to do it my way.
            MR. THAKUR:
            What do you mean?
            STEFAN:
            I need to write it at home,
            how I normally work,
            with no pressure.
            COLIN:
            I get it.
            I am the same.
            Let him do it.
            MR. THAKUR:
            Ok! But remember,
            it should be ready by November!
            STEFAN:
            Deal!
        `;
        return text;
    }, [
        new levelButton('Build game', (game) => {
            game.nextLevel(Levels.End2);
        }),
    ], 'offer_retro.png'),

    End2: new Level('Home (living room)', () => {
        let text = `
            (Five months later)
            TV HOST #1:
            The next game under our Christmas spotlight is Bandersnatch,
            the latest Tuckersoft game.
            TV HOST #2:
            Did it "snatch" your respect?
            TV HOST #1:
            It's surpassed my expectations!
            TV HOST #2:
            What's your verdict?
            TV HOST #:
            Five out of five. I'd totally recommend!
        `;
        return text;
    }, [
        new levelButton('Play again', (game) => {
            game.nextLevel(Levels.Intro1);
        }),
    ], 'rating_yes_retro_cut.png'),

};
