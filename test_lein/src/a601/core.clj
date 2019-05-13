(ns a601.core)

(defn exercise1 []
  (def temps2015 [ -30 -15 -5 7 9 18 27 25 14 5 -3 -20])
  (def temps2016 [-25 -12 -3 4 10 21 25 21 9 4 -4 -17])

  (def tempsAverage
    (let [stop 11]
      (loop [i 0
             acc []]
        (if (= i stop)
          acc
          (recur (inc i) (conj acc (float (/ (+ (get temps2015 i) (get temps2016 i)) 2))))))))

  (def positive (filter pos? tempsAverage))
  (def average (/ (reduce + positive) (count positive)))

  (println average))

(defn exercise2 []
  (def food-journal
    [{:kk 3 :paiva 1 :neste 5.3 :vesi 2.0}
     {:kk 3 :paiva 2 :neste 5.1 :vesi 3.0}
     {:kk 3 :paiva 13 :neste 4.9 :vesi 2.0}
     {:kk 4 :paiva 5 :neste 5.0 :vesi 2.0}
     {:kk 4 :paiva 10 :neste 4.2 :vesi 2.5}
     {:kk 4 :paiva 15 :neste 4.0 :vesi 2.8}
     {:kk 4 :paiva 29 :neste 3.7 :vesi 2.0}
     {:kk 4 :paiva 30 :neste 3.7 :vesi 1.0}])

  (def huhtikuu (filter #(= (:kk %) 4) food-journal))
  (def neste (->> huhtikuu
                  (map :neste)
                  (reduce +)))
  (def vesi (->> huhtikuu
                 (map :vesi)
                 (reduce +)))
  (def muuNeste (- neste vesi))
  (println muuNeste)
  )

(defn exercise3 []
  (def food-journal
    [{:kk 3 :paiva 1 :neste 5.3 :vesi 2.0}
     {:kk 3 :paiva 2 :neste 5.1 :vesi 3.0}
     {:kk 3 :paiva 13 :neste 4.9 :vesi 2.0}
     {:kk 4 :paiva 5 :neste 5.0 :vesi 2.0}
     {:kk 4 :paiva 10 :neste 4.2 :vesi 2.5}
     {:kk 4 :paiva 15 :neste 4.0 :vesi 2.8}
     {:kk 4 :paiva 29 :neste 3.7 :vesi 2.0}
     {:kk 4 :paiva 30 :neste 3.7 :vesi 1.0}])

  (def huhtikuu (filter #(= (:kk %) 4) food-journal))

  println(huhtikuu)
)

(defn -main
  [& args]
  (println "Exercise 1")
  (exercise1)
  (println)

  (println "Exercise 2")
  (exercise2)
  (println)

  (println "Exercise 3")
  (exercise3)
  (println)
  )
