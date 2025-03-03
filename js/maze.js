// Draw lines equivalent to the provided SVG
const mazeWalls = [];
function drawMaze() {
    ctx.beginPath();

    ctx.moveTo(2, 2);
    ctx.lineTo(226, 2);
    mazeWalls.push({x1: 2, y1: 2, x2: 226, y2: 2});

    ctx.moveTo(242, 2);
    ctx.lineTo(482, 2);
    mazeWalls.push({x1: 242, y1: 2, x2: 482, y2: 2});

    ctx.moveTo(50, 18);
    ctx.lineTo(82, 18);
    mazeWalls.push({x1: 50, y1: 18, x2: 82, y2: 18});

    ctx.moveTo(114, 18);
    ctx.lineTo(130, 18);
    mazeWalls.push({x1: 114, y1: 18, x2: 130, y2: 18});

    ctx.moveTo(162, 18);
    ctx.lineTo(178, 18);
    mazeWalls.push({x1: 162, y1: 18, x2: 178, y2: 18});

    ctx.moveTo(226, 18);
    ctx.lineTo(242, 18);
    mazeWalls.push({x1: 226, y1: 18, x2: 242, y2: 18});

    ctx.moveTo(274, 18);
    ctx.lineTo(290, 18);
    ctx.moveTo(306, 18);
    ctx.lineTo(354, 18);
    ctx.moveTo(402, 18);
    ctx.lineTo(418, 18);
    ctx.moveTo(434, 18);
    ctx.lineTo(450, 18);
    ctx.moveTo(18, 34);
    ctx.lineTo(50, 34);
    ctx.moveTo(98, 34);
    ctx.lineTo(114, 34);
    ctx.moveTo(146, 34);
    ctx.lineTo(226, 34);
    ctx.moveTo(242, 34);
    ctx.lineTo(274, 34);
    ctx.moveTo(290, 34);
    ctx.lineTo(306, 34);
    ctx.moveTo(322, 34);
    ctx.lineTo(370, 34);
    ctx.moveTo(386, 34);
    ctx.lineTo(402, 34);
    ctx.moveTo(2, 50);
    ctx.lineTo(82, 50);
    ctx.moveTo(114, 50);
    ctx.lineTo(146, 50);
    ctx.moveTo(210, 50);
    ctx.lineTo(258, 50);
    ctx.moveTo(306, 50);
    ctx.lineTo(322, 50);
    ctx.moveTo(338, 50);
    ctx.lineTo(354, 50);
    ctx.moveTo(402, 50);
    ctx.lineTo(418, 50);
    ctx.moveTo(466, 50);
    ctx.lineTo(482, 50);
    ctx.moveTo(18, 66);
    ctx.lineTo(50, 66);
    ctx.moveTo(82, 66);
    ctx.lineTo(98, 66);
    ctx.moveTo(162, 66);
    ctx.lineTo(178, 66);
    ctx.moveTo(194, 66);
    ctx.lineTo(210, 66);
    ctx.moveTo(258, 66);
    ctx.lineTo(274, 66);
    ctx.moveTo(290, 66);
    ctx.lineTo(402, 66);
    ctx.moveTo(18, 82);
    ctx.lineTo(34, 82);
    ctx.moveTo(50, 82);
    ctx.lineTo(98, 82);
    ctx.moveTo(130, 82);
    ctx.lineTo(162, 82);
    ctx.moveTo(178, 82);
    ctx.lineTo(210, 82);
    ctx.moveTo(306, 82);
    ctx.lineTo(322, 82);
    ctx.moveTo(354, 82);
    ctx.lineTo(386, 82);
    ctx.moveTo(402, 82);
    ctx.lineTo(466, 82);
    ctx.moveTo(34, 98);
    ctx.lineTo(98, 98);
    ctx.moveTo(114, 98);
    ctx.lineTo(130, 98);
    ctx.moveTo(162, 98);
    ctx.lineTo(178, 98);
    ctx.moveTo(258, 98);
    ctx.lineTo(290, 98);
    ctx.moveTo(322, 98);
    ctx.lineTo(338, 98);
    ctx.moveTo(370, 98);
    ctx.lineTo(418, 98);
    ctx.moveTo(434, 98);
    ctx.lineTo(466, 98);
    ctx.moveTo(18, 114);
    ctx.lineTo(34, 114);
    ctx.moveTo(66, 114);
    ctx.lineTo(82, 114);
    ctx.moveTo(98, 114);
    ctx.lineTo(130, 114);
    ctx.moveTo(146, 114);
    ctx.lineTo(194, 114);
    ctx.moveTo(226, 114);
    ctx.lineTo(258, 114);
    ctx.moveTo(290, 114);
    ctx.lineTo(322, 114);
    ctx.moveTo(354, 114);
    ctx.lineTo(370, 114);
    ctx.moveTo(402, 114);
    ctx.lineTo(482, 114);
    ctx.moveTo(18, 130);
    ctx.lineTo(66, 130);
    ctx.moveTo(82, 130);
    ctx.lineTo(114, 130);
    ctx.moveTo(178, 130);
    ctx.lineTo(194, 130);
    ctx.moveTo(226, 130);
    ctx.lineTo(242, 130);
    ctx.moveTo(274, 130);
    ctx.lineTo(306, 130);
    ctx.moveTo(322, 130);
    ctx.lineTo(402, 130);
    ctx.moveTo(450, 130);
    ctx.lineTo(466, 130);
    ctx.moveTo(2, 146);
    ctx.lineTo(34, 146);
    ctx.moveTo(82, 146);
    ctx.lineTo(98, 146);
    ctx.moveTo(114, 146);
    ctx.lineTo(146, 146);
    ctx.moveTo(162, 146);
    ctx.lineTo(274, 146);
    ctx.moveTo(306, 146);
    ctx.lineTo(338, 146);
    ctx.moveTo(386, 146);
    ctx.lineTo(418, 146);
    ctx.moveTo(34, 162);
    ctx.lineTo(130, 162);
    ctx.moveTo(146, 162);
    ctx.lineTo(178, 162);
    ctx.moveTo(210, 162);
    ctx.lineTo(242, 162);
    ctx.moveTo(322, 162);
    ctx.lineTo(370, 162);
    ctx.moveTo(386, 162);
    ctx.lineTo(466, 162);
    ctx.moveTo(18, 178);
    ctx.lineTo(50, 178);
    ctx.moveTo(130, 178);
    ctx.lineTo(146, 178);
    ctx.moveTo(178, 178);
    ctx.lineTo(194, 178);
    ctx.moveTo(226, 178);
    ctx.lineTo(258, 178);
    ctx.moveTo(306, 178);
    ctx.lineTo(338, 178);
    ctx.moveTo(354, 178);
    ctx.lineTo(386, 178);
    ctx.moveTo(402, 178);
    ctx.lineTo(482, 178);
    ctx.moveTo(2, 194);
    ctx.lineTo(18, 194);
    ctx.moveTo(34, 194);
    ctx.lineTo(82, 194);
    ctx.moveTo(130, 194);
    ctx.lineTo(178, 194);
    ctx.moveTo(194, 194);
    ctx.lineTo(226, 194);
    ctx.moveTo(290, 194);
    ctx.lineTo(306, 194);
    ctx.moveTo(338, 194);
    ctx.lineTo(370, 194);
    ctx.moveTo(386, 194);
    ctx.lineTo(418, 194);
    ctx.moveTo(50, 210);
    ctx.lineTo(66, 210);
    ctx.moveTo(146, 210);
    ctx.lineTo(162, 210);
    ctx.moveTo(178, 210);
    ctx.lineTo(194, 210);
    ctx.moveTo(226, 210);
    ctx.lineTo(242, 210);
    ctx.moveTo(306, 210);
    ctx.lineTo(338, 210);
    ctx.moveTo(434, 210);
    ctx.lineTo(482, 210);
    ctx.moveTo(18, 226);
    ctx.lineTo(50, 226);
    ctx.moveTo(66, 226);
    ctx.lineTo(178, 226);
    ctx.moveTo(194, 226);
    ctx.lineTo(258, 226);
    ctx.moveTo(290, 226);
    ctx.lineTo(322, 226);
    ctx.moveTo(338, 226);
    ctx.lineTo(386, 226);
    ctx.moveTo(418, 226);
    ctx.lineTo(434, 226);
    ctx.moveTo(450, 226);
    ctx.lineTo(466, 226);
    ctx.moveTo(82, 242);
    ctx.lineTo(114, 242);
    ctx.moveTo(146, 242);
    ctx.lineTo(162, 242);
    ctx.moveTo(226, 242);
    ctx.lineTo(290, 242);
    ctx.moveTo(322, 242);
    ctx.lineTo(450, 242);
    ctx.moveTo(34, 258);
    ctx.lineTo(66, 258);
    ctx.moveTo(114, 258);
    ctx.lineTo(130, 258);
    ctx.moveTo(162, 258);
    ctx.lineTo(194, 258);
    ctx.moveTo(210, 258);
    ctx.lineTo(258, 258);
    ctx.moveTo(306, 258);
    ctx.lineTo(322, 258);
    ctx.moveTo(338, 258);
    ctx.lineTo(354, 258);
    ctx.moveTo(370, 258);
    ctx.lineTo(386, 258);
    ctx.moveTo(402, 258);
    ctx.lineTo(466, 258);
    ctx.moveTo(2, 274);
    ctx.lineTo(34, 274);
    ctx.moveTo(82, 274);
    ctx.lineTo(114, 274);
    ctx.moveTo(146, 274);
    ctx.lineTo(178, 274);
    ctx.moveTo(210, 274);
    ctx.lineTo(226, 274);
    ctx.moveTo(242, 274);
    ctx.lineTo(290, 274);
    ctx.moveTo(306, 274);
    ctx.lineTo(370, 274);
    ctx.moveTo(402, 274);
    ctx.lineTo(418, 274);
    ctx.moveTo(434, 274);
    ctx.lineTo(466, 274);

    ctx.moveTo(34, 290); ctx.lineTo(130, 290);
    ctx.moveTo(146, 290); ctx.lineTo(162, 290);
    ctx.moveTo(210, 290); ctx.lineTo(226, 290);
    ctx.moveTo(242, 290); ctx.lineTo(290, 290);
    ctx.moveTo(306, 290); ctx.lineTo(338, 290);
    ctx.moveTo(370, 290); ctx.lineTo(386, 290);
    ctx.moveTo(2, 306); ctx.lineTo(18, 306);
    ctx.moveTo(82, 306); ctx.lineTo(98, 306);
    ctx.moveTo(130, 306); ctx.lineTo(146, 306);
    ctx.moveTo(162, 306); ctx.lineTo(210, 306);
    ctx.moveTo(226, 306); ctx.lineTo(258, 306);
    ctx.moveTo(290, 306); ctx.lineTo(306, 306);
    ctx.moveTo(338, 306); ctx.lineTo(354, 306);
    ctx.moveTo(370, 306); ctx.lineTo(402, 306);
    ctx.moveTo(18, 322); ctx.lineTo(34, 322);
    ctx.moveTo(50, 322); ctx.lineTo(82, 322);
    ctx.moveTo(98, 322); ctx.lineTo(130, 322);
    ctx.moveTo(146, 322); ctx.lineTo(162, 322);
    ctx.moveTo(194, 322); ctx.lineTo(226, 322);
    ctx.moveTo(258, 322); ctx.lineTo(338, 322);
    ctx.moveTo(354, 322); ctx.lineTo(402, 322);
    ctx.moveTo(434, 322); ctx.lineTo(450, 322);
    ctx.moveTo(18, 338); ctx.lineTo(34, 338);
    ctx.moveTo(82, 338); ctx.lineTo(98, 338);
    ctx.moveTo(130, 338); ctx.lineTo(162, 338);
    ctx.moveTo(178, 338); ctx.lineTo(258, 338);
    ctx.moveTo(306, 338); ctx.lineTo(386, 338);
    ctx.moveTo(450, 338); ctx.lineTo(482, 338);
    ctx.moveTo(66, 354); ctx.lineTo(146, 354);
    ctx.moveTo(162, 354); ctx.lineTo(194, 354);
    ctx.moveTo(226, 354); ctx.lineTo(290, 354);
    ctx.moveTo(322, 354); ctx.lineTo(354, 354);
    ctx.moveTo(370, 354); ctx.lineTo(386, 354);
    ctx.moveTo(450, 354); ctx.lineTo(466, 354);
    ctx.moveTo(2, 370); ctx.lineTo(18, 370);
    ctx.moveTo(34, 370); ctx.lineTo(50, 370);
    ctx.moveTo(82, 370); ctx.lineTo(98, 370);
    ctx.moveTo(114, 370); ctx.lineTo(130, 370);
    ctx.moveTo(146, 370); ctx.lineTo(162, 370);
    ctx.moveTo(178, 370); ctx.lineTo(210, 370);
    ctx.moveTo(258, 370); ctx.lineTo(274, 370);
    ctx.moveTo(290, 370); ctx.lineTo(338, 370);
    ctx.moveTo(386, 370); ctx.lineTo(402, 370);
    ctx.moveTo(418, 370); ctx.lineTo(450, 370);
    ctx.moveTo(466, 370); ctx.lineTo(482, 370);
    ctx.moveTo(18, 386); ctx.lineTo(34, 386);
    ctx.moveTo(50, 386); ctx.lineTo(82, 386);
    ctx.moveTo(98, 386); ctx.lineTo(114, 386);
    ctx.moveTo(130, 386); ctx.lineTo(146, 386);
    ctx.moveTo(162, 386); ctx.lineTo(178, 386);
    ctx.moveTo(194, 386); ctx.lineTo(226, 386);
    ctx.moveTo(274, 386); ctx.lineTo(290, 386);
    ctx.moveTo(338, 386); ctx.lineTo(354, 386);
    ctx.moveTo(370, 386); ctx.lineTo(434, 386);
    ctx.moveTo(450, 386); ctx.lineTo(466, 386);
    ctx.moveTo(66, 402); ctx.lineTo(130, 402);
    ctx.moveTo(178, 402); ctx.lineTo(194, 402);
    ctx.moveTo(258, 402); ctx.lineTo(290, 402);
    ctx.moveTo(306, 402); ctx.lineTo(322, 402);
    ctx.moveTo(370, 402); ctx.lineTo(418, 402);
    ctx.moveTo(434, 402); ctx.lineTo(450, 402);
    ctx.moveTo(2, 418); ctx.lineTo(34, 418);
    ctx.moveTo(66, 418); ctx.lineTo(98, 418);
    ctx.moveTo(130, 418); ctx.lineTo(162, 418);
    ctx.moveTo(178, 418); ctx.lineTo(194, 418);
    ctx.moveTo(226, 418); ctx.lineTo(258, 418);
    ctx.moveTo(274, 418); ctx.lineTo(290, 418);
    ctx.moveTo(322, 418); ctx.lineTo(338, 418);
    ctx.moveTo(354, 418); ctx.lineTo(402, 418);
    ctx.moveTo(434, 418); ctx.lineTo(466, 418);
    ctx.moveTo(18, 434); ctx.lineTo(50, 434);
    ctx.moveTo(98, 434); ctx.lineTo(114, 434);
    ctx.moveTo(146, 434); ctx.lineTo(178, 434);
    ctx.moveTo(194, 434); ctx.lineTo(226, 434);
    ctx.moveTo(290, 434); ctx.lineTo(322, 434);
    ctx.moveTo(402, 434); ctx.lineTo(418, 434);
    ctx.moveTo(2, 450); ctx.lineTo(18, 450);
    ctx.moveTo(50, 450); ctx.lineTo(66, 450);
    ctx.moveTo(98, 450); ctx.lineTo(114, 450);
    ctx.moveTo(130, 450); ctx.lineTo(162, 450);
    ctx.moveTo(178, 450); ctx.lineTo(194, 450);
    ctx.moveTo(226, 450); ctx.lineTo(242, 450);
    ctx.moveTo(274, 450); ctx.lineTo(290, 450);
    ctx.moveTo(354, 450); ctx.lineTo(402, 450);
    ctx.moveTo(418, 450); ctx.lineTo(466, 450);
    ctx.moveTo(18, 466); ctx.lineTo(50, 466);
    ctx.moveTo(82, 466); ctx.lineTo(130, 466);
    ctx.moveTo(162, 466); ctx.lineTo(178, 466);
    ctx.moveTo(242, 466); ctx.lineTo(274, 466);
    ctx.moveTo(290, 466); ctx.lineTo(322, 466);
    ctx.moveTo(354, 466); ctx.lineTo(370, 466);
    ctx.moveTo(402, 466); ctx.lineTo(450, 466);
    ctx.moveTo(466, 466); ctx.lineTo(482, 466);
    ctx.moveTo(2, 482); ctx.lineTo(242, 482);
    ctx.moveTo(258, 482); ctx.lineTo(482, 482);


    ctx.moveTo(2, 2);
    ctx.lineTo(2, 482);

    // <line x1="18" y1="18" x2="18" y2="34" />
    ctx.moveTo(18, 18);
    ctx.lineTo(18, 34);

    // <line x1="18" y1="82" x2="18" y2="130" />
    ctx.moveTo(18, 82);
    ctx.lineTo(18, 130);

    // <line x1="18" y1="162" x2="18" y2="178" />
    ctx.moveTo(18, 162);
    ctx.lineTo(18, 178);

    // <line x1="18" y1="194" x2="18" y2="226" />
    ctx.moveTo(18, 194);
    ctx.lineTo(18, 226);

    // <line x1="18" y1="242" x2="18" y2="274" />
    ctx.moveTo(18, 242);
    ctx.lineTo(18, 274);

    // <line x1="18" y1="290" x2="18" y2="306" />
    ctx.moveTo(18, 290);
    ctx.lineTo(18, 306);

    // <line x1="18" y1="338" x2="18" y2="370" />
    ctx.moveTo(18, 338);
    ctx.lineTo(18, 370);

    // <line x1="18" y1="386" x2="18" y2="402" />
    ctx.moveTo(18, 386);
    ctx.lineTo(18, 402);

    // <line x1="34" y1="2" x2="34" y2="18" />
    ctx.moveTo(34, 2);
    ctx.lineTo(34, 18);

    // <line x1="34" y1="66" x2="34" y2="82" />
    ctx.moveTo(34, 66);
    ctx.lineTo(34, 82);

    // <line x1="34" y1="146" x2="34" y2="162" />
    ctx.moveTo(34, 146);
    ctx.lineTo(34, 162);

    // <line x1="34" y1="178" x2="34" y2="210" />
    ctx.moveTo(34, 178);
    ctx.lineTo(34, 210);

    // <line x1="34" y1="242" x2="34" y2="258" />
    ctx.moveTo(34, 242);
    ctx.lineTo(34, 258);

    // <line x1="34" y1="274" x2="34" y2="322" />
    ctx.moveTo(34, 274);
    ctx.lineTo(34, 322);

    // <line x1="34" y1="354" x2="34" y2="386" />
    ctx.moveTo(34, 354);
    ctx.lineTo(34, 386);

    // <line x1="34" y1="402" x2="34" y2="418" />
    ctx.moveTo(34, 402);
    ctx.lineTo(34, 418);

    // <line x1="34" y1="434" x2="34" y2="466" />
    ctx.moveTo(34, 434);
    ctx.lineTo(34, 466);

    // <line x1="50" y1="18" x2="50" y2="34" />
    ctx.moveTo(50, 18);
    ctx.lineTo(50, 34);

    // <line x1="50" y1="82" x2="50" y2="114" />
    ctx.moveTo(50, 82);
    ctx.lineTo(50, 114);

    // <line x1="50" y1="130" x2="50" y2="146" />
    ctx.moveTo(50, 130);
    ctx.lineTo(50, 146);

    // <line x1="50" y1="210" x2="50" y2="242" />
    ctx.moveTo(50, 210);
    ctx.lineTo(50, 242);

    // <line x1="50" y1="258" x2="50" y2="274" />
    ctx.moveTo(50, 258);
    ctx.lineTo(50, 274);

    // <line x1="50" y1="306" x2="50" y2="370" />
    ctx.moveTo(50, 306);
    ctx.lineTo(50, 370);

    // <line x1="50" y1="386" x2="50" y2="434" />
    ctx.moveTo(50, 386);
    ctx.lineTo(50, 434);

    // <line x1="66" y1="34" x2="66" y2="82" />
    ctx.moveTo(66, 34);
    ctx.lineTo(66, 82);

    // <line x1="66" y1="114" x2="66" y2="162" />
    ctx.moveTo(66, 114);
    ctx.lineTo(66, 162);

    // <line x1="66" y1="178" x2="66" y2="194" />
    ctx.moveTo(66, 178);
    ctx.lineTo(66, 194);

    // <line x1="66" y1="226" x2="66" y2="258" />
    ctx.moveTo(66, 226);
    ctx.lineTo(66, 258);

    // <line x1="66" y1="274" x2="66" y2="322" />
    ctx.moveTo(66, 274);
    ctx.lineTo(66, 322);

    // <line x1="66" y1="338" x2="66" y2="386" />
    ctx.moveTo(66, 338);
    ctx.lineTo(66, 386);

    // <line x1="66" y1="418" x2="66" y2="482" />
    ctx.moveTo(66, 418);
    ctx.lineTo(66, 482);

    // <line x1="82" y1="18" x2="82" y2="50" />
    ctx.moveTo(82, 18);
    ctx.lineTo(82, 50);

    // <line x1="82" y1="130" x2="82" y2="146" />
    ctx.moveTo(82, 130);
    ctx.lineTo(82, 146);

    // <line x1="82" y1="178" x2="82" y2="226" />
    ctx.moveTo(82, 178);
    ctx.lineTo(82, 226);

    // <line x1="82" y1="242" x2="82" y2="274" />
    ctx.moveTo(82, 242);
    ctx.lineTo(82, 274);

    // <line x1="82" y1="322" x2="82" y2="338" />
    ctx.moveTo(82, 322);
    ctx.lineTo(82, 338);

    // <line x1="82" y1="386" x2="82" y2="402" />
    ctx.moveTo(82, 386);
    ctx.lineTo(82, 402);

    // <line x1="82" y1="434" x2="82" y2="466" />
    ctx.moveTo(82, 434);
    ctx.lineTo(82, 466);

    // <line x1="98" y1="2" x2="98" y2="66" />
    ctx.moveTo(98, 2);
    ctx.lineTo(98, 66);

    // <line x1="98" y1="98" x2="98" y2="130" />
    ctx.moveTo(98, 98);
    ctx.lineTo(98, 130);

    // <line x1="98" y1="162" x2="98" y2="210" />
    ctx.moveTo(98, 162);
    ctx.lineTo(98, 210);

    // <line x1="98" y1="242" x2="98" y2="258" />
    ctx.moveTo(98, 242);
    ctx.lineTo(98, 258);

    // <line x1="98" y1="290" x2="98" y2="306" />
    ctx.moveTo(98, 290);
    ctx.lineTo(98, 306);

    // <line x1="98" y1="322" x2="98" y2="338" />
    ctx.moveTo(98, 322);
    ctx.lineTo(98, 338);

    // <line x1="98" y1="354" x2="98" y2="386" />
    ctx.moveTo(98, 354);
    ctx.lineTo(98, 386);

    // <line x1="114" y1="50" x2="114" y2="98" />
    ctx.moveTo(114, 50);
    ctx.lineTo(114, 98);

    // <line x1="114" y1="146" x2="114" y2="226" />
    ctx.moveTo(114, 146);
    ctx.lineTo(114, 226);

    // <line x1="114" y1="258" x2="114" y2="274" />
    ctx.moveTo(114, 258);
    ctx.lineTo(114, 274);

    // <line x1="114" y1="306" x2="114" y2="322" />
    ctx.moveTo(144, 306);
    ctx.lineTo(144, 322);

    // <line x1="114" y1="338" x2="114" y2="354" />
    ctx.moveTo(114, 338);
    ctx.lineTo(114, 354);





    // <line x1="114" y1="370" x2="114" y2="418" />
    ctx.moveTo(114, 404);
    ctx.lineTo(114, 450);

    // <line x1="130" y1="18" x2="130" y2="66" />
    ctx.moveTo(130, 2);
    ctx.lineTo(130, 50);

    //<line x1="130" y1="66" x2="130" y2="82" />
    ctx.moveTo(130, 66);
    ctx.lineTo(130, 82);

    // <line x1="130" y1="114" x2="130" y2="178" />
    ctx.moveTo(130, 114);
    ctx.lineTo(130, 130);

    // <line x1="130" y1="194" x2="130" y2="210" />
    ctx.moveTo(130, 194);
    ctx.lineTo(130, 210);

    // <line x1="130" y1="274" x2="130" y2="290" />
    ctx.moveTo(130, 226);
    ctx.lineTo(130, 258);

    //<line x1="130" y1="274" x2="130" y2="306" />
    ctx.moveTo(130, 274);
    ctx.lineTo(130, 306);

    // <line x1="130" y1="322" x2="130" y2="338" />
    ctx.moveTo(130, 322);
    ctx.lineTo(130, 338);

    // <line x1="130" y1="402" x2="130" y2="434" />
    ctx.moveTo(130, 354);
    ctx.lineTo(130, 370);


    /////////////////////////////////

    ctx.moveTo(130, 386);
    ctx.lineTo(130, 402);

    // <line x1="130" y1="418" x2="130" y2="466" />
    ctx.moveTo(130, 418);
    ctx.lineTo(130, 466);

    // <line x1="146" y1="18" x2="146" y2="34" />
    ctx.moveTo(146, 18);
    ctx.lineTo(146, 34);

    // <line x1="146" y1="50" x2="146" y2="66" />
    ctx.moveTo(146, 50);
    ctx.lineTo(146, 66);

    // <line x1="146" y1="82" x2="146" y2="114" />
    ctx.moveTo(146, 82);
    ctx.lineTo(146, 114);

    // <line x1="146" y1="130" x2="146" y2="194" />
    ctx.moveTo(146, 130);
    ctx.lineTo(146, 194);

    // <line x1="146" y1="242" x2="146" y2="258" />
    ctx.moveTo(146, 242);
    ctx.lineTo(146, 258);

    // <line x1="146" y1="370" x2="146" y2="386" />
    ctx.moveTo(146, 370);
    ctx.lineTo(146, 386);

    // <line x1="146" y1="402" x2="146" y2="418" />
    ctx.moveTo(146, 402);
    ctx.lineTo(146, 418);

    // <line x1="146" y1="466" x2="146" y2="482" />
    ctx.moveTo(146, 466);
    ctx.lineTo(146, 482);

    // <line x1="162" y1="34" x2="162" y2="50" />
    ctx.moveTo(162, 34);
    ctx.lineTo(162, 50);

    // <line x1="162" y1="66" x2="162" y2="82" />
    ctx.moveTo(162, 66);
    ctx.lineTo(162, 82);

    // <line x1="162" y1="114" x2="162" y2="146" />
    ctx.moveTo(162, 114);
    ctx.lineTo(162, 146);

    // <line x1="162" y1="162" x2="162" y2="178" />
    ctx.moveTo(162, 162);
    ctx.lineTo(162, 178);

    // <line x1="162" y1="194" x2="162" y2="210" />
    ctx.moveTo(162, 194);
    ctx.lineTo(162, 210);

    // <line x1="162" y1="242" x2="162" y2="258" />
    ctx.moveTo(162, 242);
    ctx.lineTo(162, 258);

    // <line x1="162" y1="290" x2="162" y2="322" />
    ctx.moveTo(162, 290);
    ctx.lineTo(162, 322);

    // <line x1="162" y1="354" x2="162" y2="370" />
    ctx.moveTo(162, 354);
    ctx.lineTo(162, 370);

    // <line x1="162" y1="386" x2="162" y2="418" />
    ctx.moveTo(162, 386);
    ctx.lineTo(162, 418);

    // <line x1="162" y1="450" x2="162" y2="466" />
    ctx.moveTo(162, 450);
    ctx.lineTo(162, 466);

    // <line x1="178" y1="18" x2="178" y2="34" />
    ctx.moveTo(178, 18);
    ctx.lineTo(178, 34);

    // <line x1="178" y1="50" x2="178" y2="66" />
    ctx.moveTo(178, 50);
    ctx.lineTo(178, 66);

    // <line x1="178" y1="82" x2="178" y2="98" />
    ctx.moveTo(178, 82);
    ctx.lineTo(178, 98);

    // <line x1="178" y1="178" x2="178" y2="194" />
    ctx.moveTo(178, 178);
    ctx.lineTo(178, 194);

    // <line x1="178" y1="210" x2="178" y2="242" />
    ctx.moveTo(178, 210);
    ctx.lineTo(178, 242);

    // <line x1="178" y1="274" x2="178" y2="290" />
    ctx.moveTo(178, 274);
    ctx.lineTo(178, 290);

    // <line x1="178" y1="306" x2="178" y2="354" />
    ctx.moveTo(178, 306);
    ctx.lineTo(178, 354);

    // <line x1="178" y1="370" x2="178" y2="386" />
    ctx.moveTo(178, 370);
    ctx.lineTo(178, 386);



    // <line x1="178" y1="402" x2="178" y2="450" />
    ctx.moveTo(178, 402);
    ctx.lineTo(178, 450);

    // <line x1="178" y1="466" x2="178" y2="482" />
    ctx.moveTo(178, 466);
    ctx.lineTo(178, 482);

    // <line x1="194" y1="2" x2="194" y2="18" />
    ctx.moveTo(194, 2);
    ctx.lineTo(194, 18);

    // <line x1="194" y1="34" x2="194" y2="50" />
    ctx.moveTo(194, 34);
    ctx.lineTo(194, 50);

    // <line x1="194" y1="98" x2="194" y2="130" />
    ctx.moveTo(194, 98);
    ctx.lineTo(194, 130);

    // <line x1="194" y1="146" x2="194" y2="178" />
    ctx.moveTo(194, 146);
    ctx.lineTo(194, 178);

    // <line x1="194" y1="194" x2="194" y2="210" />
    ctx.moveTo(194, 194);
    ctx.lineTo(194, 210);

    // <line x1="194" y1="226" x2="194" y2="258" />
    ctx.moveTo(194, 226);
    ctx.lineTo(194, 258);

    // <line x1="194" y1="274" x2="194" y2="306" />
    ctx.moveTo(194, 274);
    ctx.lineTo(194, 306);

    // <line x1="194" y1="386" x2="194" y2="402" />
    ctx.moveTo(194, 386);
    ctx.lineTo(194, 402);

    // <line x1="194" y1="434" x2="194" y2="466" />
    ctx.moveTo(194, 434);
    ctx.lineTo(194, 466);

    // <line x1="210" y1="2" x2="210" y2="34" />
    ctx.moveTo(210, 2);
    ctx.lineTo(210, 34);

    // <line x1="210" y1="50" x2="210" y2="130" />
    ctx.moveTo(210, 50);
    ctx.lineTo(210, 130);

    // <line x1="210" y1="162" x2="210" y2="178" />
    ctx.moveTo(210, 162);
    ctx.lineTo(210, 178);

    // <line x1="210" y1="210" x2="210" y2="258" />
    ctx.moveTo(210, 210);
    ctx.lineTo(210, 258);

    // <line x1="210" y1="306" x2="210" y2="322" />
    ctx.moveTo(210, 306);
    ctx.lineTo(210, 322);

    // <line x1="210" y1="338" x2="210" y2="370" />
    ctx.moveTo(210, 338);
    ctx.lineTo(210, 370);

    // <line x1="210" y1="402" x2="210" y2="434" />
    ctx.moveTo(210, 402);
    ctx.lineTo(210, 434);

    // <line x1="210" y1="450" x2="210" y2="482" />
    ctx.moveTo(210, 450);
    ctx.lineTo(210, 482);

    // <line x1="226" y1="66" x2="226" y2="130" />
    ctx.moveTo(226, 66);
    ctx.lineTo(226, 130);

    ///zadnja)

    // <line x1="226" y1="194" x2="226" y2="210" />
    ctx.moveTo(226, 194);
    ctx.lineTo(226, 210);

    // <line x1="226" y1="258" x2="226" y2="274" />
    ctx.moveTo(226, 258);
    ctx.lineTo(226, 274);

    // <line x1="226" y1="290" x2="226" y2="306" />
    ctx.moveTo(226, 290);
    ctx.lineTo(226, 306);

    // <line x1="226" y1="354" x2="226" y2="386" />
    ctx.moveTo(226, 354);
    ctx.lineTo(226, 386);

    // <line x1="226" y1="402" x2="226" y2="418" />
    ctx.moveTo(226, 402);
    ctx.lineTo(226, 418);

    // <line x1="226" y1="434" x2="226" y2="450" />
    ctx.moveTo(226, 434);
    ctx.lineTo(226, 450);

    // <line x1="226" y1="466" x2="226" y2="482" />
    ctx.moveTo(226, 466);
    ctx.lineTo(226, 482);

    // <line x1="242" y1="18" x2="242" y2="98" />
    ctx.moveTo(242, 18);
    ctx.lineTo(242, 98);

    // <line x1="242" y1="146" x2="242" y2="162" />
    ctx.moveTo(242, 146);
    ctx.lineTo(242, 162);

    // <line x1="242" y1="178" x2="242" y2="194" />
    ctx.moveTo(242, 178);
    ctx.lineTo(242, 194);

    // <line x1="242" y1="274" x2="242" y2="290" />
    ctx.moveTo(242, 274);
    ctx.lineTo(242, 290);

    // <line x1="242" y1="306" x2="242" y2="338" />
    ctx.moveTo(242, 306);
    ctx.lineTo(242, 338);

    // <line x1="242" y1="354" x2="242" y2="402" />
    ctx.moveTo(242, 354);
    ctx.lineTo(242, 402);

    // <line x1="242" y1="418" x2="242" y2="434" />
    ctx.moveTo(242, 418);
    ctx.lineTo(242, 434);

    // <line x1="242" y1="450" x2="242" y2="466" />
    ctx.moveTo(242, 450);
    ctx.lineTo(242, 466);

    // <line x1="258" y1="2" x2="258" y2="18" />
    ctx.moveTo(258, 2);
    ctx.lineTo(258, 18);

    // <line x1="258" y1="66" x2="258" y2="82" />
    ctx.moveTo(258, 66);
    ctx.lineTo(258, 82);

    // <line x1="258" y1="98" x2="258" y2="146" />
    ctx.moveTo(258, 98);
    ctx.lineTo(258, 146);

    // <line x1="258" y1="162" x2="258" y2="226" />
    ctx.moveTo(258, 162);
    ctx.lineTo(258, 226);

    // <line x1="258" y1="258" x2="258" y2="274" />
    ctx.moveTo(258, 258);
    ctx.lineTo(258, 274);

    // <line x1="258" y1="290" x2="258" y2="306" />
    ctx.moveTo(258, 290);
    ctx.lineTo(258, 306);

    // <line x1="258" y1="370" x2="258" y2="450" />
    ctx.moveTo(258, 370);
    ctx.lineTo(258, 450);

    // <line x1="258" y1="466" x2="258" y2="482" />
    ctx.moveTo(258, 466);
    ctx.lineTo(258, 482);





























    //odjlkjlj

    ctx.moveTo(274, 18);
    ctx.lineTo(274, 82);

    ctx.moveTo(274, 98);
    ctx.lineTo(274, 114);

    ctx.moveTo(274, 146);
    ctx.lineTo(274, 226);

    ctx.moveTo(274, 258);
    ctx.lineTo(274, 274);

    ctx.moveTo(274, 306);
    ctx.lineTo(274, 354);

    ctx.moveTo(274, 418);
    ctx.lineTo(274, 434);

    ctx.moveTo(274, 450);
    ctx.lineTo(274, 466);

    ctx.moveTo(290, 2);
    ctx.lineTo(290, 18);

    ctx.moveTo(290, 34);
    ctx.lineTo(290, 66);

    ctx.moveTo(290, 82);
    ctx.lineTo(290, 98);

    ctx.moveTo(290, 130);
    ctx.lineTo(290, 274);

    ctx.moveTo(290, 290);
    ctx.lineTo(290, 306);

    ctx.moveTo(290, 322);
    ctx.lineTo(290, 338);

    ctx.moveTo(290, 354);
    ctx.lineTo(290, 402);

    ctx.moveTo(290, 418);
    ctx.lineTo(290, 434);

    ctx.moveTo(290, 466);
    ctx.lineTo(290, 482);

    ctx.moveTo(306, 18);
    ctx.lineTo(306, 34);

    ctx.moveTo(306, 66);
    ctx.lineTo(306, 98);

    ctx.moveTo(306, 114);
    ctx.lineTo(306, 130);

    ctx.moveTo(306, 146);
    ctx.lineTo(306, 178);

    ctx.moveTo(306, 242);
    ctx.lineTo(306, 306);

    ctx.moveTo(306, 338);
    ctx.lineTo(306, 354);

    ctx.moveTo(306, 386);
    ctx.lineTo(306, 418);

    ctx.moveTo(306, 450);
    ctx.lineTo(306, 466);

    ctx.moveTo(322, 34);
    ctx.lineTo(322, 50);

    ctx.moveTo(322, 98);
    ctx.lineTo(322, 114);

    ctx.moveTo(322, 130);
    ctx.lineTo(322, 146);

    ctx.moveTo(322, 194);
    ctx.lineTo(322, 210);

    ctx.moveTo(322, 226);
    ctx.lineTo(322, 242);

    ctx.moveTo(322, 258);
    ctx.lineTo(322, 274);

    ctx.moveTo(322, 306);
    ctx.lineTo(322, 322);

    ctx.moveTo(322, 370);
    ctx.lineTo(322, 402);

    ctx.moveTo(322, 434);
    ctx.lineTo(322, 466);

    ctx.moveTo(338, 66);
    ctx.lineTo(338, 98);

    ctx.moveTo(338, 114);
    ctx.lineTo(338, 130);

    ctx.moveTo(338, 162);
    ctx.lineTo(338, 194);

    ctx.moveTo(338, 210);
    ctx.lineTo(338, 226);

    ctx.moveTo(338, 290);
    ctx.lineTo(338, 306);

    ctx.moveTo(338, 322);
    ctx.lineTo(338, 338);

    ctx.moveTo(338, 386);
    ctx.lineTo(338, 482);

    ctx.moveTo(354, 50);
    ctx.lineTo(354, 66);

    ctx.moveTo(354, 82);
    ctx.lineTo(354, 114);

    ctx.moveTo(354, 130);
    ctx.lineTo(354, 146);

    ctx.moveTo(354, 210);
    ctx.lineTo(354, 226);

    ctx.moveTo(354, 258);
    ctx.lineTo(354, 322);

    ctx.moveTo(354, 354);
    ctx.lineTo(354, 434);

    ctx.moveTo(370, 2);
    ctx.lineTo(370, 50);

    ctx.moveTo(370, 114);
    ctx.lineTo(370, 130);

    ctx.moveTo(370, 146);
    ctx.lineTo(370, 162);

    ctx.moveTo(370, 178);
    ctx.lineTo(370, 210);

    ctx.moveTo(370, 258);
    ctx.lineTo(370, 306);

    ctx.moveTo(370, 354);
    ctx.lineTo(370, 402);

    ctx.moveTo(370, 434);
    ctx.lineTo(370, 466);

    ctx.moveTo(386, 18);
    ctx.lineTo(386, 66);

    ctx.moveTo(386, 98);
    ctx.lineTo(386, 114);

    ctx.moveTo(386, 146);
    ctx.lineTo(386, 178);

    ctx.moveTo(386, 194);
    ctx.lineTo(386, 226);

    ctx.moveTo(386, 242);
    ctx.lineTo(386, 258);

    ctx.moveTo(386, 338);
    ctx.lineTo(386, 354);

    ctx.moveTo(386, 418);
    ctx.lineTo(386, 450);

    ctx.moveTo(386, 466);
    ctx.lineTo(386, 482);

    ctx.moveTo(402, 2);
    ctx.lineTo(402, 18);

    ctx.moveTo(402, 82);
    ctx.lineTo(402, 98);

    ctx.moveTo(402, 114);
    ctx.lineTo(402, 130);

    ctx.moveTo(402, 178);
    ctx.lineTo(402, 194);

    ctx.moveTo(402, 210);
    ctx.lineTo(402, 242);

    ctx.moveTo(402, 258);
    ctx.lineTo(402, 290);

    ctx.moveTo(402, 306);
    ctx.lineTo(402, 370);

    ctx.moveTo(402, 450);
    ctx.lineTo(402, 466);

    ctx.moveTo(418, 18);
    ctx.lineTo(418, 82);

    ctx.moveTo(418, 130);
    ctx.lineTo(418, 146);

    ctx.moveTo(418, 194);
    ctx.lineTo(418, 210);

    ctx.moveTo(418, 290);
    ctx.lineTo(418, 386);

    ctx.moveTo(418, 402);
    ctx.lineTo(418, 450);

    ctx.moveTo(434, 18);
    ctx.lineTo(434, 66);

    ctx.moveTo(434, 98);
    ctx.lineTo(434, 114);

    ctx.moveTo(434, 130);
    ctx.lineTo(434, 162);

    ctx.moveTo(434, 178);
    ctx.lineTo(434, 194);

    ctx.moveTo(434, 210);
    ctx.lineTo(434, 226);

    ctx.moveTo(434, 274);
    ctx.lineTo(434, 354);

    ctx.moveTo(434, 386);
    ctx.lineTo(434, 402);

    ctx.moveTo(434, 418);
    ctx.lineTo(434, 434);

    ctx.moveTo(450, 18);
    ctx.lineTo(450, 82);

    ctx.moveTo(450, 114);
    ctx.lineTo(450, 146);

    ctx.moveTo(450, 194);
    ctx.lineTo(450, 210);

    ctx.moveTo(450, 290);
    ctx.lineTo(450, 322);

    ctx.moveTo(450, 354);
    ctx.lineTo(450, 386);

    ctx.moveTo(450, 434);
    ctx.lineTo(450, 450);

    ctx.moveTo(466, 18);
    ctx.lineTo(466, 50);

    ctx.moveTo(466, 66);
    ctx.lineTo(466, 82);

    ctx.moveTo(466, 146);
    ctx.lineTo(466, 162);

    ctx.moveTo(466, 178);
    ctx.lineTo(466, 194);

    ctx.moveTo(466, 226);
    ctx.lineTo(466, 258);

    ctx.moveTo(466, 274);
    ctx.lineTo(466, 338);

    ctx.moveTo(466, 386);
    ctx.lineTo(466, 434);

    ctx.moveTo(482, 2);
    ctx.lineTo(482, 482);

    ctx.stroke();
}