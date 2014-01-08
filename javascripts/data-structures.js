var LinkedList = function(dataType){
  var length = 0;
  var head = null;
  var tail = null;
  
  if(typeof dataType === "undefined") {
    dataType = null;
  }
  
  /**
    Private function that returns a node data structure.
  */
  var makeNode = function(data) {
    return {
      data: data,
      next: null,
      previous: null
    };
  };
  
  /**
    Private function that checks a data type of incoming content.
  */
  var isAcceptableDataType = function(data) {
    // Case: When data type isn't enforced.
    if(dataType === null) {
      return true;
    }
    
    return (typeof data === dataType);
  };
  
  /**
    Private function that checks the data type of incoming content.
  */
  var isUnacceptableDataType = function(data) {
    return !isAcceptableDataType(data);
  }
  
  /**
    Public access methods are defined within the associated array.
  */
  return {
    /**
      Inserts new data at the end of the list.
    */
    add: function (data){
      if( isUnacceptableDataType(data) ) {
        console.error("Unable to add content into linked list!  List data type is enforced and passed in data didn't match");
        return;
      }
  
      var node = makeNode(data);
    
      // Case: New list
      if (this.length == 0) {
        this.head = node;
        this.tail = node;
        this.length += 1;
        return;
      }
        
      // Inserting new node at end of the current list
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      this.length += 1;
    },
  
    /**
      Returns the content at a given index.
    */
    indexOf: function(index) {
      // Case: Empty List
      if ( this.length == 0 ) {
        console.error("Unable to retrive content from the linked list!  Linked list was empty.");
      }
    
      // Error Case: Invalid Index
      if ( index < 0 || index >= length ) {
        console.error("Unable to retrive content from the linked list!  Passed in index wasn't within the acceptable bounds!  Index was ' + index + '");
        return null;
      }
    
      // Case: Right traversal
      if ( index < (this.length / 2) ) {
        var pointer = this.head;
        var position = 0;
      
        while( position < index ) {
          pointer = pointer.next;
          position += 1;
        }
      
        return pointer.data;
      
      // Case: Left traversal
      } else {
        var pointer = this.tail;
        var position = (this.length - 1);
      
        while( position > index ) {
          pointer = pointer.previous;
          position -= 1;
        }
      
        return pointer.data;
      }
    }
  };
};
