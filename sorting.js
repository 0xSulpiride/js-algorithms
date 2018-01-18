function swap(lst, i, j) {
  let temp = lst[j-1];
  lst[j-1] = lst[j];
  lst[j] = temp;
  return lst;
}

// complexity - O(n^2)
function bubble_sort(lst) {
  for(let i = 0; i < lst.length; ++i) {
    for(let j = 0; j < lst.length - 1; ++j) {
      if(lst[j] > lst[j+1]) {
        lst = swap(lst, j, j+1)
      }
    }
  }
  return lst;
}

function selection_sort(lst) {
  for(let min = 0; min < lst.length - 1; ++min) {
    let least = min;
    for(let j = min + 1; j < lst.length; ++j)
      if(lst[least] > lst[j])
        least = j;
    lst = swap(lst, least, min);
  }
  return lst;
}

function insertion_sort(lst) {
  for(let i = 1; i < lst.length; ++i)
    for(let j = i; j > 0 && lst[j-1] > lst[j]; j--)
      lst = swap(lst, j, j-1)
}