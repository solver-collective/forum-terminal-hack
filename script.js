var animation;
var emailEntered = false;
var purposeEntered = false;
var dataEntryMode = false;
var email;
var purpose;
var date = new Date();
var testers = Math.floor(Math.random() * 30) + 1;

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const klaviyoPostProfile = async () => {
    try{
        const options = {
            method: 'POST',
            headers: {Accept: 'text/html', 'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
                data: JSON.stringify({
                    token: "R58uJx",
                    properties: {
                        "$email": email,
                        "Purpose": purpose
                    }
                })
            })
        };
        
        let response = await fetch('https://a.klaviyo.com/api/identify', options);
        return response.json();
    }catch(e){
        console.error(e);
    }
}

var term = $('.body').terminal(async function(command) {
    if(!command && !dataEntryMode){
        ssh_hack(this);
    }
    if(command && dataEntryMode){
        if(!emailEntered){
            if(validateEmail(command.trim())){
                email = command.trim();
                emailEntered = true;
                term.echo('\nWhat is your purpose here?');
                term.set_prompt('# ');
            }else{
                term.echo('\nInvalid email entered. Enter valid email address:');
                term.set_prompt('# ');
            }
        }else if(!purposeEntered){
            purpose = command;
            purposeEntered = true;
            // after last attribute is entered, submit data to Klaviyo API
            // ensure function is edited to include all fields to add to Klaviyo profile
            await klaviyoPostProfile();
            term.echo('\nData comm transmission processed.');
            await delay(400);
            term.echo('Verify comm link to acquire further access.');
            dataEntryMode = false;
            term.freeze(true);
            term.set_prompt('');
        }
    }
}, {
    greetings: false,
    keydown: function(e) {
        if (animation || !dataEntryMode) {
            return false;
        }
    },
    prompt: '# ',
    // obBlur will prevent the keyboard on mobile from popup because it will keep the terminal in focus and on mobile the terminal has to be disabled on init so you can activate it with a finger tap 
    //onBlur: function() {
        //return false;
    //}
});

ssh_hack(term);

function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

async function ssh_hack(term) {
    animation = true;
    // Application Init - Boot Sequence
    term.set_prompt('');
    async function step(msg) {
        msg = `${msg}`;
        term.echo(msg);
        var id = term.last_index();
        await delay(1000);
        msg += '\n...successful.';
        term.update(-1, msg);
    }
    await step('Connecting to adhoc NET 19.97.31.01:ssh ');
    await step('Log: ' + date.toLocaleString());
    await step('Server side exploit SSHv1 4****');
    await delay(1500);
    term.echo([
        '[_PROTOTYPE_EXPERIMENTAL_0001_]',
        '',
        '[L1550]\t\t[R800]\t\t\t[WP294.92]\n[NP251]\t\t[N/TL1955]\t\t[LAUNCH_2022/2023]'
    ].join('\n'));
    term.echo('');
    // App Loading
    await delay(1000);
    await term.typing('enter', 50, 'loadingNext -v -sS -O 0.2.7 -rootpw="PMS396"');
    
    term.echo('Reset root password to "666F72756D".');
    await delay(400);

    // Reset Password
    await term.typing('enter', 50, 'ssh 19.97.31.01 -l root');
    term.set_prompt('root@19.97.31.01\'s password: ');
    await delay(1000);
    term.set_prompt('FRM-CONTROL> ').echo('root@19.97.31.01\'s password: \n');
    await delay(500);

    // Experimental Test Program Loader
    await term.typing('enter', 50, '[EXPERIMENTAL_TEST_PROGRAM_]');
    await delay(1500);
    await term.typing('enter', 30, '...........................');
    await term.typing('enter', 30, '////\t////\t////\t////');
    await term.typing('enter', 10, [
        '                          ',
        '                          ',
        '[;#e0df00;]         @#(((######%@    ',
        '[;#e0df00;]        @     ** **  @    ',
        '[;#e0df00;]        @    @@    *@     ',
        '[;#e0df00;]       @     @@     @     ',
        '[;#e0df00;]       @@@@@@@@@@@@@@     ',
        '[;#e0df00;]       @    @@&    @      ',
        '[;#e0df00;]      @     @@     @      ',
        '[;#e0df00;]      @ ** **     @       ',
        '[;#e0df00;]      @@@@@@@@@@@@@       ',
        '                          ',
        '                          '
        ].join('\n'));
    
    // Warning - Team Activation Sequence
    await term.typing('enter', 50, 'LOADING.........');
    term.set_prompt('');
    await delay(800);
    term.echo('[LOADING_NEXT]');
    await delay(800);
    term.echo('[TESTERS_- - -]');
    await delay(800);
    term.echo('[TEAM_- - - ]\n\n');
    await delay(2000);
    term.echo('[[;#B9EDFF;]Warning: Activating TEST_LOCATION/S]');
    term.set_prompt('');
    term.echo('         [[;#B9EDFF;]ARE YOU SURE? (y/n)]');
    await delay(2000);
    term.update(-1, '         [[;#B9EDFF;]ARE YOU SURE? (y/n)] y');
    term.echo('');
    await delay(200);
    for (let i = 1; i <= testers; i++) {
        term.echo(`[[;#B9EDFF;]TEST_LOCATION ${i} online...]`);
        await delay(200);
    }
    // Crash Reported
    term.echo('CRASH REPORTED');
    term.set_prompt('# ');
    await delay(400);
    async function crash(msg) {
        msg = `${msg} ...`;
        term.echo(msg);
        var id = term.last_index();
        await delay(1500);
        msg += 'REPORTING';
        term.update(-1, msg);
    }
    await crash('ERROR.._SYSTEM_CRASH');
    await delay(400);
    await crash('ERROR.._SYSTEM_CRASH');
    await delay(400);
    term.echo('CRASH REPORTED');
    await delay(400);
    // Close App
    term.echo('\nConnection to [_PROTOTYPE_EXPERIMENTAL_0001_] closed.');
    // Verify User Control
    term.echo('\nEnter your email to continue:');
    term.set_prompt('# ');
    animation = false;
    dataEntryMode = true;
}