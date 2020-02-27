import java.util.ArrayList;
import java.io.FileWriter;  
import java.io.IOException;
import java.util.List;
import java.util.Random;
class Solution {
    static int UPPERRANGE = 11;
    static int INSERT_MOD = 400;
    
    static int MAX_EXTRAS = 1000 + 500 + 250 + 100 + 50 + 25 + 10 + 5;
    static int MAX_VALUES = 997940; //Max size for ALL ints 
    Random numGenerator = new Random();
    
    // Public method to do Solution 2
    public void doSolution() {
    
        List<Integer>randomInts = new ArrayList<Integer>();
        int prevValue = 0;
        int extraIndex = 0;
        int[]extraValues = createUnortedArray();    // generate list withthe 'special extra' values
        // Generate random numver list
        for ( int i = 0; i < MAX_VALUES; i++ ) {
          //make sure no repeat  
          int curInt = getRandomNumber(UPPERRANGE);
          while ( prevValue == curInt ) {
              curInt = getRandomNumber(UPPERRANGE);
          }
          randomInts.add(new Integer(curInt));
          prevValue = curInt;
          //add in 'extra' values
          if ( (i % INSERT_MOD) == 0 ) {
              if ( extraIndex < extraValues.length ) {
                curInt = extraValues[extraIndex++];
                randomInts.add(new Integer(curInt));
                prevValue = curInt;
                if ( curInt == 20 ) {
                   System.out.println("Random(20): " + extraIndex );  // only 5 of these
                }
              }
          }
        }   
        writeResultsToFile(randomInts);
        return;
    }
    //generate a random number within given range (0+1 - n+1)
    private int getRandomNumber(int maxvalue) {
        return  numGenerator.nextInt(UPPERRANGE) + 1;
    }
    
    //put the 'extra' values in an unsorted array to use later
    private int[] createUnortedArray() {
        int[] extras = new int[MAX_EXTRAS];

        for ( int i = 0; i < 1000; i++ ) {
            extras[i] = 13;
        }
        for ( int i = 1000; i < 1500; i++ ) {
            extras[i] = 14;
        } 
        for ( int i = 1500; i < 1750; i++ ) {
            extras[i] = 15;
        } 
        for ( int i = 1750; i < 1800; i++ ) {
            extras[i] = 16;
        }
        for ( int i = 1800; i < 1850; i++ ) {
            extras[i] = 17;
        } 
        for ( int i = 1850; i < 1875; i++ ) {
            extras[i] = 18;
        } 
        for ( int i = 1875; i < 1895; i++ ) {
            extras[i] = 19;
        }
        for ( int i = 1895; i < 1900; i++ ) {
            extras[i] = 20;
        } 
        
        Random rand = new Random();
        //randmomize here
        for (int i = 0; i < extras.length; i++) {
           int nextInt = rand.nextInt(extras.length);
           int temp = extras[i];
           extras[i] = extras[nextInt];
           extras[nextInt] = temp;
        }        
  
        return extras;
    }
    
    // write generated data (Integer array) to text file
    private boolean writeResultsToFile(List<Integer>randomInts) {
      boolean writeCompleted = false;
      FileWriter myWriter = null;
      try {
        myWriter = new FileWriter("randomNumbers.txt");
        if ( myWriter != null ) {
          for ( Integer value: randomInts ) {
            myWriter.write(value + "\n");              
          }
        } 
        myWriter.flush();  // flush anything in stream to output
       } catch (IOException e) {
         System.out.println("Error writing to file: " + e.getMessage());
         e.printStackTrace();
       }   finally {
          try {
            if ( myWriter != null ) {
                myWriter.close();       //close the file
                writeCompleted = true;
            }
          }  catch (IOException e) {
            System.out.println("Error closing file: " + e.getMessage());
            e.printStackTrace();
          }
       }
       return writeCompleted;
    }    
}
