# Problem-Statement-1
**Given an array of bird where every element represents a bird type id, determine the ids of the most 
frequently and least frequently sighted type. If more than 1 type has been spotted that maximum 
amount, return the smallest of their ids & If more than 1 type has been spotted that minimum amount, 
return the smallest of their ids.**

## Things used
- Map
- Array
- prompt-sync
- Math.max & Math.min

## Approach
1. We will create a key & frequency pair and archive this using the map . We will traverse the array and maintain the frequency of the elements.
2. We will find the `**max frequency** by using max function.
3. We will find the **min frequency** by using min function.
4. We will maintain a **prev** variable with infinite number.
5. We will traverse the map and check if the frequencies in map greater then equal to `max frequency` we stored and also present key is less than `prevmax` key.
```js
if (value >= highVal && key < prevmax) {
            highVal = value;
            prevmax = key;  
   }
```
6. We will traverse the map and check if the frequencies in map less then equal to `min frequency` we stored and also present key is less than `prevmin` key.
```js
if (value <= MinVal && key<prevmin) {
        MinVal = value;
        prevmin = key;
   }
```

