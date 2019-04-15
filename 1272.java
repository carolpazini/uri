String messages = "compete·online·design·event·rating\n" +
                "··u····r·i··o····n·l··i····n··e···\n" +
                "·\n" +
                "round··elimination·during··onsite··contest";

        int TESTES = 4;

        Scanner in = new Scanner(messages);
        String message = in.nextLine().toLowerCase();

        for(int i = 0; i < TESTES; i++) {
            int qntdPalavras = 0;
            String msg = "";
            //o replaceAll apaga todos os . e troca por espaço em branco
            msg = message.replaceAll("·", " ");
            //esse trim apaga os espaços em branco no começo e final da frase
            msg = msg.trim();
            String messageHidden = "";
            qntdPalavras = msg.split("\\s+").length;

            for (int j = 0; j < qntdPalavras; j++) {
                if(msg == "") {
                    messageHidden = " ";
                } else {
                    messageHidden = messageHidden + msg.split("\\s+")[j].charAt(0);
                }

            }
            System.out.println(messageHidden);
            message = in.nextLine().toLowerCase();
        }

    }


    }

