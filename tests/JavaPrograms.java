// Remove duplicate characters from a string in Java

public class JavaPrograms {
    public static void main(String[] args) {
        String str = "Hello, World!";
        String result = "";

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (result.indexOf(ch) == -1) {
                result += ch;
            }
        }

        System.out.println(result);
    }
}
