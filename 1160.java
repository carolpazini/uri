int PA, PB, T, ANOS ;
        double G1, G2;

        ANOS = 0;
        T = 6;
        PA = 90000;
        PB = 120000;
        G1 = 5.5;
        G2 = 3.5;
        
        for(int i = 0; i < T; i++) {
            double PA1, PB1;
            while(PA <= PB) {
               PA1 = ((PA * G1)/100)+PA;
               PB1 = ((PB * G2)/100)+PB;

               PA = (int)PA1;
               PB = (int)PB1;

               ANOS++;
            }
            if(ANOS > 100)
             System.out.println("Mais de 1 seculo.");

            else
                System.out.println(ANOS +" anos");
        }