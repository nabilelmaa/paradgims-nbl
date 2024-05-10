package clientServer.fxscanner;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.StringTokenizer;

public class FxScanner {
    
    public static boolean isFxServer(int port) throws Exception {
        try(ServerSocket ss = new ServerSocket(port)) {
            Socket connectionFromClient = ss.accept();
            InputStream in = connectionFromClient.getInputStream();
            OutputStream out = connectionFromClient.getOutputStream();

            BufferedReader headerReader = new BufferedReader(new InputStreamReader(in));
            BufferedWriter headerWriter = new BufferedWriter(new OutputStreamWriter(out));

            DataInputStream dataIn = new DataInputStream(in);

            String fileName = "file.txt";
            String header = "download_chunk" + " " + fileName + " " + 1 + " " + -2;
            headerWriter.write(header, 0, header.length());
            headerWriter.flush();
            String response = headerReader.readLine();
            StringTokenizer strk = new StringTokenizer(response, " ");
            String message = strk.nextToken();

            if (message.equals("INVALID REQUEST")) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static void main(String[] args) {
        String baseIp = "10.10.10.";
        int startIp = 1;
        int endIp = 254;
        int startPort = 1;
        int endPort = 65535;

        for (int i = startIp; i <= endIp; ++i) {
            String host = baseIp + i;
            for (int port = startPort; port < endPort; ++port) {
                try (Socket socket = new Socket()) {
                    socket.connect(new InetSocketAddress(host, port), 1000);
                    if (isFxServer(port)) {
                        System.out.println("Fx Server running at " + host + ":" + port);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
