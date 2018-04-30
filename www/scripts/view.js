// view
var app = function(app) {

    app.View = function(model, layoutManager) {

        var v = this;
        zog(model.colors);

        var page1 = v.page1 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        // var header = new Container(500,100).addTo(page1);
        // var logo = new Label("HOME").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page1);
        // put intro screen

        var background = frame.asset("instructions.png")
        .addTo(content);

        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.tabs1 = new Tabs({
            tabs:["Home", "Explore"],
            color:'#2383e2',
            width:300,
            height:50,
            spacing:10,
        }).addTo(page1);

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout1 = v.layout1 = new Layout(page1,[
            // {object:header, marginTop:5, backgroundColor:frame.yellow},
            {object:content, marginTop:10, backgroundColor:frame.dark},
            {object:footer, marginTop:1, maxWidth:60, minHeight:5}
        ], 5, frame.dark, null, null, stage);
        layoutManager.add(layout1);


        // PAGE 2

        var page2 = v.page2 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        // var header = new Container(500,100).addTo(page2);
        // var logo = new Label("Ocean Cleanup Game").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(700,700).addTo(page2);

        var music = frame.asset("underwater.mp3");
        music.play();

        //~~~~~~~~~~~~~~SUBMARINE~~~~~~~~~~~~~
        var sub = frame.asset("submarine.png")
        		 .center(content)
             .mov(0,0);

        sub.y = 200;
        sub.x = 0;

        sub.wiggle({
            property:"y",
            baseAmount:sub.y,
            minAmount:10,
            maxAmount:15,
            minTime:700,
            maxTime:1000
        });

        Ticker.always();

        //~~~~~~~~~~~~~~TURTLE~~~~~~~~~~~~~~

		    var turtle = frame.asset("turtle.png");
		    turtle.addTo(content);
        turtle.y = 5;
        turtle.wiggle({
            property:"y",
            baseAmount:turtle.y,
            minAmount:10,
            maxAmount:30,
            minTime:1000,
            maxTime:2000
        });

        //text area turtle

        var textArea = new TextArea({
            frame:frame,
            width: 300,
            height:165,
            size:15,
            color:frame.white,
            padding:20,
            readOnly:true
        }).center(content);
        textArea.text = "Sea turtles are one of the Earth's most ancient creatures. The seven species that can be found today have been around for 110  million years, since the time of the dinosaurs!";
        textArea.backing.removeFrom(textArea);

        // turtle pane

		    turtle.on("click", function() {
			  var pane = new Pane({
            width:300,
            height:165,
            label:textArea,
            color:'#5ac2d5',
        });
			  pane.show();
		    });

        //~~~~~~~~~~~~~~WHALE~~~~~~~~~~~~~~

        var whale = frame.asset("whale.png");
        whale.addTo(content).mov(900,0);
        whale.y = 100;
        whale.wiggle({
            property:"y",
            baseAmount:whale.y,
            minAmount:10,
            maxAmount:30,
            minTime:1000,
            maxTime:2000
        });

        //text area whale

        var textAreaWhale = new TextArea({
            frame:frame,
            width: 300,
            height:165,
            size:15,
            color:frame.white,
            padding:20,
            readOnly:true
        })
        .center(content);
        textAreaWhale.text = "Blue whales are the largest animals ever known to have lived on Earth. These magnificent marine mammals rule the oceans at up to 100 feet long and upwards of 200 tons.";
        textAreaWhale.backing.removeFrom(textAreaWhale);

        // whale pane

      	whale.on("click", function() {
      	var pane = new Pane({
            width:300,
            height:165,
            label:textAreaWhale,
            color:'#5ac2d5',
        });
      	pane.show();
      	});

        //~~~~~~~~~~~~~~BLUEFISH~~~~~~~~~~~~~~

        var fishblue = frame.asset("fishblue.png");
        fishblue.addTo(content).mov(2000,2850);
          fishblue.animate({ // circle will be the default object for the inner animations
            obj:[
              {obj:{x:1000, y:500}, time:5, ease:"quadInOut"},
              {obj:{x:2850, y:-1500}, time:20000, ease:"quadInOut"}

            ],
            loop:true,
            loopCount:0
          });

        //~~~~~~~~~~~~~~JELLYFISH~~~~~~~~~~~~~~

        var jellyfish = frame.asset("jellyfish.png");
        jellyfish.addTo(content).mov(2000,0);
        jellyfish.y = 75;
        jellyfish.wiggle({
            property:"y",
            baseAmount:jellyfish.y,
            minAmount:10,
            maxAmount:30,
            minTime:1000,
            maxTime:2000
        });

        //text area jellyfish

        var textAreaJelly = new TextArea({
            frame:frame,
            width: 300,
            height:165,
            size:15,
            color:frame.white,
            padding:20,
            readOnly:true
        })
        .center(content);
        textAreaJelly.text = "Jellyfish dine on fish, shrimp, crabs and tiny plants. Some jellyfish are clear, but others are vibrant colors such as pink, yellow, blue, and purple, and often are luminescent.";
        textAreaJelly.backing.removeFrom(textAreaJelly);

        // jellyfish pane

      	jellyfish.on("click", function() {
      	var pane = new Pane({
            width:300,
            height:165,
            label:textAreaJelly,
            color:'#5ac2d5',
        });
      	pane.show();
      	});

        //~~~~~~~~~~~~~~SEAL~~~~~~~~~~~~~~

        var seal = frame.asset("seal.png");
        seal.addTo(content).mov(2500,300);

        var ball = frame.asset("ball.png");
        ball.y=0;

        ball
        .addTo(content)
        .mov(2675,140)
        .wiggle({
            property:"y",
            baseAmount:ball.y,
            minAmount:90,
            maxAmount:100,
            minTime:500,
            maxTime:2000
        });

        //text area seal

        var textAreaSeal = new TextArea({
            frame:frame,
            width: 300,
            height:150,
            size:15,
            color:frame.white,
            padding:20,
            readOnly:true
        })
        .center(content);
        textAreaSeal.text = "Seals can sleep underwater. They spend months at sea and can stay underwater for up to two hours, by slowing their heartbeat to preserve oxygen.";
        textAreaSeal.backing.removeFrom(textAreaSeal);

        // seal pane

      	seal.on("click", function() {
      	var pane = new Pane({
            width:300,
            height:150,
            label:textAreaSeal,
            color:'#5ac2d5',
        });
      	pane.show();
      	});

        //~~~~~~~~~~~~~~CIRCLE SCHOOL OF FISH ~~~~~~~~~~~~~~

        var fishcircle = frame.asset("fishcircle.png");
        fishcircle
        .addTo(content)
        .centerReg(content)
        .mov(2950,-75)
        .animate({
      		obj:{rotation:360},
      		time:10000,
      		loop:true
      	});

        //text area fish

        var textAreaSchool = new TextArea({
            frame:frame,
            width: 300,
            height:200,
            size:15,
            color:frame.white,
            padding:20,
            readOnly:true
        })
        .center(content);
        textAreaSchool.text = "Schools of fish typically face in one direction and exhibit synchronized movements. Each fish maintains an exact spacing from its neighbor. As they swim, they follow the movements of their neighbors and change their course in unison.";
        textAreaSchool.backing.removeFrom(textAreaSchool);

        // fish pane

      	fishcircle.on("click", function() {
      	var pane = new Pane({
            width:300,
            height:200,
            label:textAreaSchool,
            color:'#5ac2d5',
        });
      	pane.show();
      	});

        //~~~~~~~~~~~~~~SEAHORSES~~~~~~~~~~~~~~

        var seahorse = frame.asset("seahorse.png");
        seahorse.addTo(content).mov(3850,250);
        seahorse.y = 250;
        seahorse.wiggle({
            property:"y",
            baseAmount:seahorse.y,
            minAmount:10,
            maxAmount:30,
            minTime:1000,
            maxTime:2000
        });

        var heart = frame.asset("hearts.png");
        heart.addTo(content).mov(3830,45)
        .animate({
          obj:[
            {obj:{x:3830, y:45}, time:5, ease:"quadInOut"},
            {obj:{x:3830, y:-500}, time:5000, ease:"quadInOut"}
          ],
          loop:true,
          loopCount:0,
          loopwait:0
        });

        //text area seahorse

        var textAreaSeahorse = new TextArea({
            frame:frame,
            width: 300,
            height:180,
            size:15,
            color:frame.white,
            padding:20,
            readOnly:true
        })
        .center(content);
        textAreaSeahorse.text = "Seahorses pair for life. They meet first thing in the morning to reinforce their pair bonding with an elaborate courtship display. The female meets the male in his territory and as they approach each other, they change colour.";
        textAreaSeahorse.backing.removeFrom(textAreaSeahorse);

        // seahorse pane

      	seahorse.on("click", function() {
      	var pane = new Pane({
            width:300,
            height:180,
            label:textAreaSeahorse,
            color:'#5ac2d5',
        });
      	pane.show();
      	});

        //~~~~~~~~~~~~~~SCHOOL OF FISH UP~~~~~~~~~~~~~~

        var school = frame.asset("school.png");
        school.addTo(content);
          school.animate({
            obj:[
              {obj:{x:1000, y:500}, time:5, ease:"quadInOut"},
              {obj:{x:1500, y:-1000}, time:20000, ease:"quadInOut"}
            ],
            loop:true,
            loopCount:0,
            loopWait:1000
          });


        //~~~~~~~~~~~~~~SCROLLER~~~~~~~~~~~~~~
        var scenery = new Container().addTo(content, 0);

        var fish = new Container(4000, stageH);

        turtle.addTo(fish);
        whale.addTo(fish);
        school.addTo(fish);
        jellyfish.addTo(fish);
        seal.addTo(fish);
        ball.addTo(fish);
        fishcircle.addTo(fish);
        fishblue.addTo(fish);
        seahorse.addTo(fish);
        heart.addTo(fish);

        var accelerator = new Accelerator([
            new Scroller(frame.asset("background2.png").scaleTo(stage,null,100).addTo(scenery), 1, null, null, null, stage),
            new Scroller(fish.addTo(scenery), 1.5),
            new Scroller(frame.asset("oceanbed.png").scaleTo(stage,null,100).addTo(scenery).mov(0,100), 3, null, null, null, stage),
            new Scroller(frame.asset("coral.png").scaleTo(stage,null,100).addTo(scenery).mov(0,250), 2, null, null, null, stage),
            new Scroller(fish, 2, null, null, null, stage),
        ]);

        var pd = new ProportionDamp(0, stageW, -200, 200); // for accelerator
		    Ticker.add(function() {

        accelerator.percentSpeed = pd.convert(stage.mouseX);

          })


        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.tabs2 = new Tabs({
            tabs:["Home"],
            color:frame.blue,
            width:100,
            height:40,
            spacing:10,
        }).addTo(page2);
        footer.selectedIndex = 1;

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        // var layout2 = v.layout2 = new Layout(page2,[
        //     // {object:header, marginTop:5, backgroundColor:frame.yellow},
        //     {object:content, marginTop:10, backgroundColor:frame.green},
        //     {object:footer, marginTop:2, maxWidth:60, minHeight:10}
        // ], 5, frame.grey, null, new Shape(), stage);
        // layoutManager.add(layout2);


    }

    return app;
}(app || {});
