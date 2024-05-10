package clientServer.resume;

import java.net.*;
import java.util.StringTokenizer;
import java.io.*;

public class Server {
    public static void main(String[] args) {
        try (ServerSocket ss = new ServerSocket(80)) {

            while (true) {

                Socket connectionFromClient = ss.accept();
                System.out.println("Got a connection from a client whose port is:" + connectionFromClient.getPort());

                InputStream in = connectionFromClient.getInputStream();
                OutputStream out = connectionFromClient.getOutputStream();

                BufferedReader headerReader = new BufferedReader(new InputStreamReader(in));
                BufferedWriter headerWriter = new BufferedWriter(new OutputStreamWriter(out));

                DataOutputStream dataOut = new DataOutputStream(out);

                String header = headerReader.readLine();
                StringTokenizer strk = new StringTokenizer(header, " ");
                String command = strk.nextToken();
                String fileName = strk.nextToken();

                if (command.equals("download")) {
                    try {
                        long downloadedBytes = 0;
                        String rangeHeader = headerReader.readLine();
                        StringTokenizer token = new StringTokenizer(rangeHeader, " ");
                        String text = token.nextToken();
                        if (text.equals("bytes=")) {
                            String currentBytes = token.nextToken();
                            long myBytes = Long.parseLong(currentBytes);
                            downloadedBytes = myBytes;
                        }

                        FileInputStream fileIn = new FileInputStream("ServerShare/" + fileName);
                        int fileSize = fileIn.available();
                        header = "OK" + fileSize + "/n";
                        headerWriter.write(header, 0, header.length());
                        byte[] bytes = new byte[4096];

                        fileIn.skip(downloadedBytes);
                        int bytesRead;
                        while ((bytesRead = fileIn.read(bytes)) != -1) {
                            dataOut.write(bytes, 0, bytesRead);
                        }

                    } catch (Exception e) {

                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
