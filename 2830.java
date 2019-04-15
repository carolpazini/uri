int K, L;


        Scanner in = new Scanner(System.in);

        System.out.println("Digite a posição K:");
        K = in.nextInt();
        System.out.println("Digite a posição L:");
        L = in.nextInt();

        if((K <= 8 && L>= 9) || (L <= 8 && K>= 9)){
            System.out.println("FINAL");
        }


        else if(K > L) {
            if( K <= 8 && L <= 8){
                if(K <= 4 && L <= 4){
                    if( (K - L) == 1){
                        System.out.println("Oitavas");
                    } else if (K - L == 2 || K - L == 3){
                        System.out.println("QUARTAS");

                    }else
                        System.out.println("SEMIFINAL");
                } else if ((K >= 5 || K <= 8) && (L >= 5 || L <= 8 )) {
                    if( (K - L) == 1){
                        System.out.println("Oitavas");
                    } else if (K - L == 2 || K - L == 3){
                        System.out.println("QUARTAS");

                    }else
                        System.out.println("SEMIFINAL");
                }

            }
        } else  {
            if( K <= 8 && L <= 8){
                if(K <= 4 && L <= 4){
                    if( (L - K) == 1){
                        System.out.println("Oitavas");
                    } else if (L - K == 2 || K - L == 3){
                        System.out.println("QUARTAS");

                    }else
                        System.out.println("SEMIFINAL");
                } else if ((K >= 5 || K <= 8) && (L >= 5 || L <= 8 )) {
                    if( (L - K) == 1){
                        System.out.println("Oitavas");
                    } else if (L - K == 2 || K - L == 3){
                        System.out.println("QUARTAS");

                    }else
                        System.out.println("SEMIFINAL");
                }


            }
        }

    }


    }