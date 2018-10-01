function mergeLists(head1, head2) {
    
    var singlyLinkedListNode1 = head1;
    var singlyLinkedListNode2 = head2;
    /*create new linked list*/
    var newLinkedList = new SinglyLinkedList();
    
    /*keep adding values till both the linked list are not empty(Merge procedure of merge sort)*/
    while(singlyLinkedListNode1!=null && singlyLinkedListNode2!=null){
        if(singlyLinkedListNode1.data <= singlyLinkedListNode2.data){
            newLinkedList.insertNode(singlyLinkedListNode1.data);
            singlyLinkedListNode1=singlyLinkedListNode1.next;
        }else{
            newLinkedList.insertNode(singlyLinkedListNode2.data);
            singlyLinkedListNode2=singlyLinkedListNode2.next;
        }
    }
    
    /*if one of the linked lists become empty*/
    
    while(singlyLinkedListNode1!=null){
        newLinkedList.insertNode(singlyLinkedListNode1.data);
        singlyLinkedListNode1=singlyLinkedListNode1.next;
    }
    
     while(singlyLinkedListNode2!=null){
        newLinkedList.insertNode(singlyLinkedListNode2.data);
        singlyLinkedListNode2=singlyLinkedListNode2.next;
    }
    
    return newLinkedList.head;
}