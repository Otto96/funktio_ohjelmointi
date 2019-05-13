(ns test-lein.core
  (:gen-class))

(defn isEven []
  (println "Syötä numero: ")
  (def number (read-string (read-line)))
  (cond
    (< number 0) (when true
                   (println "Elä anna negatiivista lukua!")
                   (recur))
    (even? number) (println "Tasaluku.")
    :else (println "Pariton luku.")))

(defn printDivisibleBy3 [upperLimit]
  (doseq [i (range 1 (+ upperLimit 1)) :when (zero? (mod i 3))]
    (println i)))

(defn lottery []
  (set (take 7 (set (take 14 (repeatedly #(inc (rand-int 39))))))))

(defn syt [p,q]
  (cond (zero? q) p
        :else (recur q (mod p q))))

(defn -main
  [& args]

  (println "Tehtävät 1&2: ")
  (isEven)

  (println)
  (println "Tehtävä 3: ")
  (printDivisibleBy3 20)

  (println)
  (println "Tehtävä 4: ")
  (println(lottery))

  (println)
  (println "Tehtävä 5: ")
  (println(syt 102 68)))
