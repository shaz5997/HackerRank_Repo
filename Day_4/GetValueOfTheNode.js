function getNode(head, positionFromTail) {
    var prev=head;
    var current=head;

    for(var i=0;i<positionFromTail;i++){
        current = current.next;
    }

    while(current.next!=null){
        prev=prev.next;
        current = current.next;
    }

    return prev.data;
}