// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as List from "bs-platform/lib/es6/list.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Tree$PhyloLibWeb from "./tree.bs.js";
import * as Distance$PhyloLibWeb from "./distance.bs.js";

function add_species(species, i, j, acc) {
  var s1 = Caml_array.caml_array_get(species, i);
  var s2 = Caml_array.caml_array_get(species, j);
  var match = List.assoc_opt(i, acc);
  var match$1 = List.assoc_opt(j, acc);
  if (match !== undefined) {
    if (match$1 !== undefined) {
      var r = List.remove_assoc(j, List.remove_assoc(i, acc));
      return {
              hd: [
                i < j ? i : j,
                Tree$PhyloLibWeb.zip_no_params({
                      hd: match,
                      tl: {
                        hd: match$1,
                        tl: /* [] */0
                      }
                    })
              ],
              tl: r
            };
    }
    var r$1 = List.remove_assoc(i, acc);
    return {
            hd: [
              i < j ? i : j,
              Tree$PhyloLibWeb.zip_no_params({
                    hd: Tree$PhyloLibWeb.leaf_no_params(s2),
                    tl: {
                      hd: match,
                      tl: /* [] */0
                    }
                  })
            ],
            tl: r$1
          };
  }
  if (match$1 === undefined) {
    return {
            hd: [
              i < j ? i : j,
              Tree$PhyloLibWeb.zip_no_params({
                    hd: Tree$PhyloLibWeb.leaf_no_params(s1),
                    tl: {
                      hd: Tree$PhyloLibWeb.leaf_no_params(s2),
                      tl: /* [] */0
                    }
                  })
            ],
            tl: acc
          };
  }
  var r$2 = List.remove_assoc(j, acc);
  return {
          hd: [
            i < j ? i : j,
            Tree$PhyloLibWeb.zip_no_params({
                  hd: Tree$PhyloLibWeb.leaf_no_params(s1),
                  tl: {
                    hd: match$1,
                    tl: /* [] */0
                  }
                })
          ],
          tl: r$2
        };
}

function upgma(dist, species) {
  var match = species.length;
  if (match !== 0) {
    if (match !== 1) {
      var _dist = dist;
      var _acc = /* [] */0;
      while(true) {
        var acc = _acc;
        var dist$1 = _dist;
        if (Distance$PhyloLibWeb.is_done(dist$1)) {
          var tree_list = List.rev_map((function (x) {
                  return x[1];
                }), acc);
          if (List.length(tree_list) === 1) {
            return List.hd(tree_list);
          } else if (List.length(tree_list) > 1) {
            return Tree$PhyloLibWeb.zip_no_params(tree_list);
          } else {
            return Pervasives.failwith("Precondition violated in upgma_help");
          }
        }
        var match$1 = Distance$PhyloLibWeb.min_index(dist$1);
        var j = match$1[1];
        var i = match$1[0];
        var t = add_species(species, i, j, acc);
        var d = Distance$PhyloLibWeb.combine(i, j, dist$1);
        _acc = t;
        _dist = d;
        continue ;
      };
    } else {
      return Tree$PhyloLibWeb.leaf_no_params(Caml_array.caml_array_get(species, 0));
    }
  } else {
    return Tree$PhyloLibWeb.empty;
  }
}

export {
  upgma ,
  
}
/* Tree-PhyloLibWeb Not a pure module */
