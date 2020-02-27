import java.util.ArrayList;
import java.io.FileWriter;  
import java.io.IOException;
import java.util.List;
import java.util.Random;
class Solution {
    static final int UPPERRANGE = 11;
    static final int INSERT_MOD = 400;
    
    static final int NUM_13 = 1000;
    static final int NUM_14 = 500;
    static final int NUM_15 = 250;
    static final int NUM_16 = 100;
    static final int NUM_17 = 50;
    static final int NUM_18 = 25;
    static final int NUM_19 = 10;
    static final int NUM_20 = 5;
    
    static final int MAX_EXTRAS = NUM_13 + NUM_14 + NUM_15 + NUM_16 + NUM_17 + NUM_18 + NUM_19 + NUM_20;
    static final int MAX_VALUES = 997940; //Max size for ALL ints 
    Random numGenerator = new Random();
    
    // Public method to do Solution 2
    public void doSolution() {
    
        List<Integer>randomInts = new ArrayList<Integer>();
        int prevValue = 0;
        int extraIndex = 0;
        int[]extraValues = createUnsortedArray();    // generate list withthe 'special extra' values
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
                i++;
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
    private int[] createUnsortedArray() {
        int[] extras = new int[MAX_EXTRAS];

        int lowerBound = 0;
        int upperBound = NUM_13;
        for ( int i = lowerBound; i < upperBound; i++ ) {
            extras[i] = 13;
        }
     
        lowerBound = upperBound;
        upperBound += NUM_14;
        for ( int i = lowerBound; i < upperBound; i++ ) {
            extras[i] = 14;
        } 
        
        lowerBound = upperBound;
        upperBound += NUM_15;
        for ( int i = lowerBound; i < upperBound; i++ ) {
            extras[i] = 15;
        } 
        
        lowerBound = upperBound;
        upperBound += NUM_16;
        for ( int i = lowerBound; i < upperBound; i++ ) {
            extras[i] = 16;
        }
        
        lowerBound = upperBound;
        upperBound += NUM_17;
        for ( int i = lowerBound; i < upperBound; i++ ) {
            extras[i] = 17;
        } 
        
        lowerBound = upperBound;
        upperBound += NUM_18;
        for ( int i = lowerBound; i < upperBound; i++ ) {
            extras[i] = 18;
        } 
        
        lowerBound = upperBound;
        upperBound += NUM_19;
        for ( int i = lowerBound; i < upperBound; i++ ) {
            extras[i] = 19;
        }
        
        lowerBound = upperBound;
        upperBound += NUM_20;
        for ( int i = lowerBound; i < upperBound; i++ ) {
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
