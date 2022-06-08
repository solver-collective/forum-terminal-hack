var animation;
var emailEntered = false;
var fullnameEntered = false;
var dataEntryMode = false;
var email;
var fullname;

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
                        "Full Name": fullname
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
                term.echo('\nPlease enter your full name to continue:');
                term.set_prompt('# ');
            }else{
                term.echo('\nInvalid email entered. Enter valid email address:');
                term.set_prompt('# ');
            }
        }else if(!fullnameEntered){
            fullname = command;
            fullnameEntered = true;
            // after last attribute is entered, submit data to Klaviyo API
            // ensure function is edited to include all fields to add to Klaviyo profile
            await klaviyoPostProfile();
            term.echo('\nYour hack attempt has been reported to the Central Mainframe\n\n');
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
    onBlur: function() {
        return false;
    }
});

ssh_hack(term);

function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

async function ssh_hack(term) {
    animation = true;
    // hacking sequence from Matrix Reloaded
    term.clear().echo([
        '# loadingNext -v -sS -O 0.2.2.2',
        '[ _PROTOTYPE_EXPERIMENTAL_0001_ ]',
        '',
        'Starting nmap V. 2.54BETA25',
        'Insufficient responses for TCP sequencing (3). OS detection may be less',
        'accurate',
        'Interesting ports on 10.2.2.2:',
        '(The 1539 ports scanned but not shown below are in state: closed)',
        'Port\t\tState\t\tService\n22/tcp\t\topen\t\tssh',
        '',
        'No exact OS matches for host',
        '',
        'Nmap run completed -- 1 IP address (1 host up) scanneds'
    ].join('\n'));
    await term.typing('enter', 100, 'loadingNext -v -sS -O 0.2.2.2 -rootpw="PMS396"');
    term.set_prompt('');
    async function step(msg) {
        msg = `${msg} ...`;
        term.echo(msg);
        var id = term.last_index();
        await delay(1000);
        msg += ' successful.';
        term.update(-1, msg);
    }
    await step('Connecting to 10.2.2.2:ssh');
    await step('Attempting to exploit SSHv1 CRC32');
    term.echo('Reset root password to "666F72756D".');
    await delay(400);
    term.echo('CRASH REPORTED');
    term.set_prompt('# ');
    await delay(400);
    await term.typing('enter', 100, 'ssh 10.2.2.2 -l root');
    term.set_prompt('root@10.2.2.2\'s password: ');
    await delay(1000);
    term.set_prompt('RRF-CONTROL> ').echo('root@10.2.2.2\'s password: \n');
    await delay(500);
    await term.typing('enter', 100, 'disable grid nodes 21 - 48');
    term.echo('LOADING - - - - -');
    term.echo('[LOADING_NEXT]');
    term.echo('[[;#B9EDFF;]Warning: Disabling TEST_LOCATION/S 21-48 will disconnect sector 11 (27 nodes)]');
    term.set_prompt('');
    term.echo('         [[;#B9EDFF;]ARE YOU SURE? (y/n)]');
    await delay(1000);
    term.update(-1, '         [[;#B9EDFF;]ARE YOU SURE? (y/n)] y');
    term.echo('');
    await delay(200);
    for (let i = 21; i <= 48; i++) {
        term.echo(`[[;#B9EDFF;]TEST_LOCATION/S Node ${i} offline...]`);
        await delay(200);
    }
    term.echo('\nConnection to loadingNext[_PROTOTYPE_EXPERIMENTAL_0001_] closed.');
    term.echo('\nPlease enter your email to continue:');
    term.set_prompt('# ');
    animation = false;
    dataEntryMode = true;
}

// docs: https://github.com/jcubic/jquery.terminal/wiki/Typing-Animation