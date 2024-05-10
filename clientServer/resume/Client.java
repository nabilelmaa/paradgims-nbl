package clientServer.resume;
import java.net.*;
import java.nio.BufferOverflowException;
import java.sql.DataTruncation;
import java.util.StringTokenizer;

import java.io.*;

public class Client {
    public static void main(String[] args) throws Exception{
        String command = args[0];
        String fileName = args[1];

        try(Socket connectionToServer = new Socket("localhost", 80)) {
            InputStream in = connectionToServer.getInputStream();      
            OutputStream out = connectionToServer.getOutputStream();
            
            BufferedReader headerReader = new BufferedReader(new InputStreamReader(in));
            BufferedWriter headerWriter = new BufferedWriter(new OutputStreamWriter(out));

            DataInputStream dataIn = new DataInputStream(in);

            if (command.equals("d")) {
                
                // String 
                
            } else {
                System.out.println();
            }

        }

    }
}
