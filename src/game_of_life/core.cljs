(ns game-of-life.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [game-of-life.game :as g]))

(enable-console-print!)

(defn pstr [v]
  (with-out-str (cljs.pprint/pprint v)))

(defn pprn [v]
  (prn (pstr v)))

(def config 
  {:grid-size [100 100] ;[rows cols]
   :canvas-size [1000 1000] ;[width height] in pixels
   })


(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 5)
  ; circle color and position.
  {:cell-width (/ (-> config :canvas-size first)
                (-> config :grid-size second))
   :cell-height (/ (-> config :canvas-size second)
                   (-> config :grid-size first))
   :grid (apply g/new-grid (:grid-size config))})

(defn update-state [state]
  (update-in state [:grid]  g/iterate-grid))

(defn draw-state [state]
   ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  (q/no-stroke)
  (let [grid (:grid state)] 
    (doseq [[r row] (map-indexed list grid)
            [c cell] (map-indexed list row)]
      (q/with-translation [(* c (:cell-width state)) 
                           (* r (:cell-height state))]
        (apply q/fill
               (cond
                 (> cell 0) [0 255 0]
                 (< cell 0) [255 0 0]
                 :else [100 100 100]))
        (q/rect 1 1 (dec (:cell-width state)) (dec (:cell-height state)))))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch game-of-life
    :host "game-of-life"
    :size (:canvas-size config)
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
;(run-sketch)


