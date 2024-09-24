export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    if (this.nodes.length === 0) {
      this.nodes.push({ data: item, priority });
    } else {
      let added = false;
      let i = 0;
      while (!added) {
        if (i < this.nodes.length) {
          if (this.nodes[i].priority <= priority) {
            this.nodes.splice(i, 0, { data: item, priority });
            added = true;
          }
          i++;
        } else {
          this.nodes.push({ data: item, priority });
          added = true;
        }
      }
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (this.nodes.length === 0) return undefined;
    const node = this.nodes.shift();
    return node?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length === 0) return undefined;
    const node = this.nodes[0];
    return node.data;
  }
}
