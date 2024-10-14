// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int sum(vector<int> numbers)
{
    if (numbers.empty() || numbers.size() == 1)
        return 0;

    int min = *min_element(numbers.begin(), numbers.end());
    int max = *max_element(numbers.begin(), numbers.end());

    return accumulate(numbers.begin(), numbers.end(), 0) - min - max;

}