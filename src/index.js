const app = () => {
    window.userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard").focus();
  };
  
  const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
  
    if (input.length === 0) {
      return;
    }
  
    // "Secret" party command
    if (input === "party") {
      startTheParty();
    }
  
    // Another "Secret" command
    if (input === "sudo rm -rf") {
      whooops();
    }
  
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
    } else {
      output += `<div class="output"> ${COMMANDS[input]} </div>`;
    }
  
    terminalOutput.innerHTML = `${
      terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  };
  
  const key = function keyEvent(e) {
    userInput = document.getElementById("userInput");
    const input = window.userInput.innerHTML;
  
    if (e.key === "Enter") {
      execute(input);
      userInput.innerHTML = "";
      return;
    }
  
    userInput.innerHTML = input + e.key;
  };
  
  const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(
      0,
      userInput.innerHTML.length - 1
    );
  };
  
  document.addEventListener("keydown", backspace);
  document.addEventListener("keypress", key);
  if (document.readyState !== "loading") {
    app();
  }
  
  // TOP SECRET, DON'T READ
  const startTheParty = () => {
    var confettiSettings = {
      target: "canvas",
      max: "1000",
      size: "1",
      animate: true,
      props: ["square", "triangle", "line"],
      colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
      clock: "25",
      rotate: true,
      width: "1680",
      height: "971",
      start_from_edge: true,
      respawn: false
    };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  };
  
  const whooops = () => {
    document.body.querySelector(".hero").remove();
    document.body.style.background = "#000";
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
  };
  
  const COMMANDS = {
    help:
      'Supported commands: ["<span class="code">about</span>", <span class="code">store</span>", "<span class="code">links</span>"]',
    about:
      "Hello 👋<br>I'm Acdevs or ton1o_02 on git, instagram and twitch. I’m a 20 yr old engineering student currently living in Spain. I have a burning passion to help others and to create content on social media. I enjoy coding and cycling 🚴‍♂️",
    links:
      '<span class="links"><a style="color: green;" href="https://www.instagram.com/cl3anartz/"> Instagram</a> 👈Click here</span><br><span><a style="color: green;" href="https://www.youtube.com/channel/UCK_VWpVnsu4fTPCtHdecunw">Youtube</a> 👈click here</span><br><span><a style="color: green;" href="https://www.twitch.tv/ton1o_02">Twitch</a> 👈click here</span><br><span><a style="color: green;" href="https://github.com/Acdevss"> GitHub</a> 👈Click here</span>',
    store:
      '<span class="links"><a style="color: green;" href="www.yugraphs.tk"> Yü-Graphs</a> 👈Click here</span>',
    clear:
       '<button class="raise" onclick="location.reload()">Click for clear the screen</button>',
    };
  
    let refresh = document.getElementById('refresh');
    refresh.addEventListener('click', _ => {
            location.reload();
})
