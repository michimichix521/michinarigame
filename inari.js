function inari()
{
    function Arc(ct, color, x,y, RADIUS, fillcolor)
        {
            ct.beginPath();
            ct.strokeStyle = color;
            ct.arc(x, y, RADIUS, 0, Math.PI * 2, false);

            ct.stroke();
        }
        function Line(ct, color, x1, y1, x2, y2)
        {
            ct.beginPath();
            ct.strokeStyle = color;
            ct.moveTo(x1, y1);
            ct.lineTo(x2, y2);
            ct.stroke();
        }

        const MAXBALL = 2000;
        const WIDE = 640;
        const HIGHT = 480;
        const RADIUS = 5;

        let ballx = new Array(MAXBALL);
        let bally = new Array(MAXBALL);
        let speedX = new Array(MAXBALL);
        let speedY = new Array(MAXBALL);
        let rad = new Array(MAXBALL);
        let color = new Array(MAXBALL);
        let zokusei = new Array(MAXBALL);


        let cntA = 0, cntB = 0;

        for (let i = 0; i < MAXBALL; i++)
        {
            ballx[i] = Math.floor(Math.random() * (WIDE - RADIUS));
            bally[i] = Math.floor(Math.random() * (HIGHT - RADIUS));
            speedX[i] = Math.floor(Math.random() * 3 + 1);
            speedY[i] = Math.floor(Math.random() * 3 + 1);
            rad[i] = RADIUS;
            //color[i] = '#000000';
            zokusei[i] = Math.floor(Math.random() * 2);
           // if (zokusei[i] == 0) { color[i] = '#000000'; }
           // if (zokusei[i] == 1) { color[i] = '#ccffcc'; }
            switch(zokusei[i])
            {
                case 0:
                    color[i] = '#000000';
                    break;
                case 1:
                    color[i] = '#ccffcc';
                    break;
            }

        }

                                                    
        function mainloop(ct)
        {
            var cv = document.getElementById('cv1');
            if (!cv) { return; }

            var ct = cv.getContext('2d');
            if (!ct) { return; }

            ct.fillStyle = '#ffffff';
            ct.fillRect(0, 0, cv.width, cv.height);
            ct.fillStyle = '#000000';
           
            const LEFT_A = 50, UP_A = 50, WIDE_A = 150, HIGHT_A = 150;
            const LEFT_B = 350, UP_B = 50, WIDE_B = 150, HIGHT_B = 150;
            ct.fillStyle = '#ffcccc';
            ct.fillRect(LEFT_A, UP_A, WIDE_A, HIGHT_A);
            ct.fillStyle = '#ccccff';
            ct.fillRect(LEFT_B, UP_B, WIDE_B, HIGHT_B);


            for (let i = 0; i < MAXBALL; i++)
            {
                Arc(ct, color[i], ballx[i], bally[i], rad[i]);
                ballx[i] += speedX[i];
                if (ballx[i] >= WIDE || ballx[i] <= 0) { speedX[i] *= -1; }
                bally[i] += speedY[i];
                if (bally[i] >= HIGHT || bally[i] <= 0) { speedY[i] *= -1; }
                if (ballx[i] > LEFT_A && ballx[i] < (WIDE_A + LEFT_A) && bally[i] > UP_A && bally[i] < (HIGHT_A + UP_A))
                {
                    if (speedX[i] != 0 && speedY[i] != 0) { cntA++; }
                    speedX[i] = 0;
                    speedY[i] = 0;
                }
                if (ballx[i] > LEFT_B && ballx[i] < (WIDE_B + LEFT_B) && bally[i] > UP_B && bally[i] < (HIGHT_B + UP_B))
                {
                    if (speedX[i] != 0 && speedY[i] != 0) { cntB++; }
                    speedX[i] = 0;
                    speedY[i] = 0;

                }

                
            }
            ct.font = "20pt Arial";
            ct.fillText(cntA, LEFT_A, UP_A - 20);
            ct.fillText(cntB, LEFT_B, UP_B - 20);

            setTimeout("mainloop()", 10);
        }
}