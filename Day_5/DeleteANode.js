function deleteNode(head, position) {
    if (head == null) {
        return null;
    }
    if (position ==0) {
        return head.next;
    } else {
        var current = head;
        for (var i = 0; i < position - 1; i++){
            current = current.next;
        }
        current.next = current.next.next;
}
    return head;
}