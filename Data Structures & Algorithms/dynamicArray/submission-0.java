class DynamicArray {    
    public int[] arr;
    public int size;
    public DynamicArray(int capacity) {
        this.arr = new int[capacity];
        this.size=0;
    }

    public int get(int i) {
        return this.arr[i];

    }

    public void set(int i, int n) {
        this.arr[i]=n;
    }

    public void pushback(int n) { 
        if(size==this.arr.length){
            this.resize();        
        }
        arr[size]=n;
        size++;
    }

    public int popback() {
        size--;
        return this.arr[size];
    }

    private void resize() {
        this.arr=Arrays.copyOf(this.arr,this.arr.length*2);
    }

    public int getSize() {        
        return size;
    }

    public int getCapacity() {
        return this.arr.length;
    }
}
