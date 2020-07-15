// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Hashtbl from "bs-platform/lib/es6/hashtbl.js";
import * as Caml_obj from "bs-platform/lib/es6/caml_obj.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Msa$PhyloLibWeb from "./msa.bs.js";
import * as Pairwise$PhyloLibWeb from "./pairwise.bs.js";

function dist_dna(dnas, align, misalign, indel) {
  var m = dnas.length;
  var dist_matrix = Hashtbl.create(undefined, m);
  for(var i = 0; i < m; ++i){
    for(var j = i + 1 | 0; j < m; ++j){
      Hashtbl.add(dist_matrix, [
            i,
            j
          ], Pairwise$PhyloLibWeb.diff(Caml_array.caml_array_get(dnas, i), Caml_array.caml_array_get(dnas, j), align, misalign, indel));
    }
  }
  return dist_matrix;
}

function dist_msa(msa, gap) {
  var m = Msa$PhyloLibWeb.num_seq(msa);
  Pervasives.print_int(m);
  var n = Msa$PhyloLibWeb.seq_len(msa);
  Pervasives.print_int(n);
  var dist_matrix = Hashtbl.create(undefined, m);
  for(var i = 0; i < m; ++i){
    var diff = 0;
    for(var j = i + 1 | 0; j < m; ++j){
      for(var k = 0; k < n; ++k){
        Pervasives.print_int(i);
        if (Msa$PhyloLibWeb.get_base(i, k, msa) === /* "_" */95 || Msa$PhyloLibWeb.get_base(j, k, msa) === /* "_" */95) {
          diff = diff + gap | 0;
        } else if (Msa$PhyloLibWeb.get_base(i, k, msa) !== Msa$PhyloLibWeb.get_base(j, k, msa)) {
          diff = diff + 1 | 0;
        }
        
      }
      Hashtbl.add(dist_matrix, [
            i,
            j
          ], diff);
    }
  }
  return dist_matrix;
}

function min_pos(dist) {
  if (Hashtbl.length(dist) === 0) {
    return [
            [
              0,
              0
            ],
            0
          ];
  }
  var acc_0 = [
    0,
    0
  ];
  var acc = [
    acc_0,
    Pervasives.max_float
  ];
  return Hashtbl.fold((function (k, v, acc) {
                if (v < acc[1]) {
                  return [
                          k,
                          v
                        ];
                } else {
                  return acc;
                }
              }), dist, acc);
}

function min_diff(dist) {
  return min_pos(dist)[1];
}

function min_index(dist) {
  return min_pos(dist)[0];
}

function diff(index, dist) {
  return Hashtbl.find(dist, index);
}

function remove(i, dist) {
  return Hashtbl.filter_map_inplace((function (k, v) {
                if (Caml_obj.caml_equal(k[0], i) || Caml_obj.caml_equal(k[1], i)) {
                  return ;
                } else {
                  return Caml_option.some(v);
                }
              }), dist);
}

function avg_helper(j, k, dist) {
  return Hashtbl.find(dist, [
              Caml_obj.caml_min(j, k),
              Caml_obj.caml_max(j, k)
            ]);
}

function average(i, j, dist) {
  var avg = function (k, v) {
    if (k[0] === i) {
      var other = k[1];
      var v_val = v + avg_helper(other, i, dist);
      return v_val / 2;
    }
    if (k[1] !== i) {
      return v;
    }
    var other$1 = k[0];
    return (v + avg_helper(other$1, i, dist)) / 2;
  };
  return Hashtbl.filter_map_inplace(avg, dist);
}

function combine(i, j, dist) {
  if (i >= j) {
    Pervasives.failwith("invalid input");
  } else {
    average(i, j, dist);
  }
  remove(j, dist);
  return dist;
}

function dim(dist) {
  return Hashtbl.fold((function (k, v, acc) {
                if (k[0] === 0) {
                  return acc + 1 | 0;
                } else {
                  return acc;
                }
              }), dist, 1);
}

function is_done(dist) {
  return Hashtbl.length(dist) === 0;
}

export {
  dist_dna ,
  dist_msa ,
  min_index ,
  min_diff ,
  diff ,
  combine ,
  dim ,
  is_done ,
  
}
/* No side effect */
