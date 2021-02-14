(ns game-of-life.game)

(defn new-grid [num-rows num-cols]
  (-> (vec (repeat num-rows (vec (repeat num-cols 0))))
      (assoc-in [0 0] 1)
      (assoc-in [0 2] 1)))

(defn neighbor-vals [g r c]
  (let [r-1 (dec r)
        r+1 (inc r)
        c-1 (dec c)
        c+1 (inc c)]
    (map #(get-in g %1) [[r-1 c-1] [r-1 c] [r-1 c+1] [r c-1] [r c+1] [r+1 c-1] [r+1 c] [r+1 c+1]])))

(defn count-neighbors [g r c]
  (count (filter #(> % 0) (neighbor-vals g r c))))

(defn iterate-grid [g]
  (let [num-rows (count g)
        num-cols (count (first g))]
    (into []
          (for [r (range num-rows)]
               (into []
                     (for [c (range num-cols)]
                       (let [n (count-neighbors g r c)
                             v (get-in g [r c])]
                         (if (or (= 3 n)
                                 (and (= 2 n) (= 0 v)))
                           1
                           0))))))))
