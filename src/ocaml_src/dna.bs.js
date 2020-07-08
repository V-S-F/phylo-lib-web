// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as List from "bs-platform/lib/es6/list.js";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as $$Buffer from "bs-platform/lib/es6/buffer.js";
import * as Stream from "bs-platform/lib/es6/stream.js";
import * as $$String from "bs-platform/lib/es6/string.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Caml_exceptions from "bs-platform/lib/es6/caml_exceptions.js";
import * as Caml_builtin_exceptions from "bs-platform/lib/es6/caml_builtin_exceptions.js";

var Empty = Caml_exceptions.create("Dna-PhyloLibWeb.Empty");

function is_name_line(str) {
  return $$String.sub(str, 0, 1) === ">";
}

function is_dna(c) {
  if (c >= 72) {
    if (c !== 84) {
      return c === 95;
    } else {
      return true;
    }
  }
  if (c === 45) {
    return true;
  }
  if (c < 65) {
    return false;
  }
  switch (c - 65 | 0) {
    case 1 :
    case 3 :
    case 4 :
    case 5 :
        return false;
    case 0 :
    case 2 :
    case 6 :
        return true;
    
  }
}

function parse_line(str, dna_seq) {
  var str$1 = $$String.uppercase_ascii(str);
  return $$String.iter((function (c) {
                if (is_dna(c)) {
                  return $$Buffer.add_char(dna_seq, c);
                }
                
              }), str$1);
}

function parse_first_line(dna_stream) {
  var v = Stream.peek(dna_stream);
  if (v !== undefined) {
    if (is_name_line(v)) {
      return Stream.junk(dna_stream);
    } else {
      return ;
    }
  }
  throw Empty;
}

var to_string = $$Buffer.contents;

function from_fasta(init_sizeOpt, loc) {
  var init_size = init_sizeOpt !== undefined ? init_sizeOpt : 16384;
  var f = Pervasives.open_in(loc);
  var read_line = function (i) {
    try {
      return Pervasives.input_line(f);
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.end_of_file) {
        return ;
      }
      throw exn;
    }
  };
  var dna_stream = Stream.from(read_line);
  parse_first_line(dna_stream);
  var dna_seq = $$Buffer.create(init_size);
  Stream.iter((function (str) {
          return parse_line(str, dna_seq);
        }), dna_stream);
  return dna_seq;
}

function trim_name_line(str) {
  var idx;
  try {
    idx = $$String.index(str, /* "\n" */10);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      idx = 0;
    } else {
      throw exn;
    }
  }
  var first_line = $$String.sub(str, 0, idx);
  if (first_line === "" || is_name_line(first_line)) {
    return $$String.sub(str, idx + 1 | 0, (str.length - idx | 0) - 1 | 0);
  } else {
    return str;
  }
}

function from_string(str) {
  var dna_seq = $$Buffer.create(128);
  parse_line(trim_name_line(str), dna_seq);
  return dna_seq;
}

var length = $$Buffer.length;

function multiple_helper(_str, _acc) {
  while(true) {
    var acc = _acc;
    var str = _str;
    if (!is_name_line(str)) {
      return acc;
    }
    var trimmed = trim_name_line(str);
    var idx;
    try {
      idx = $$String.index(trimmed, /* ">" */62);
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        idx = trimmed.length - 1 | 0;
      } else {
        throw exn;
      }
    }
    var next = $$String.sub(trimmed, 0, idx);
    var left;
    try {
      left = $$String.sub(trimmed, idx, trimmed.length - idx | 0);
    }
    catch (exn$1){
      left = "";
    }
    var dna_seq = $$Buffer.create(128);
    parse_line(next, dna_seq);
    _acc = /* :: */[
      dna_seq,
      acc
    ];
    _str = left;
    continue ;
  };
}

function multiple_from_string(str) {
  var lst = multiple_helper(str, /* [] */0);
  return $$Array.of_list(List.fold_left((function (a, x) {
                    return /* :: */[
                            x,
                            a
                          ];
                  }), /* [] */0, lst));
}

function is_empty(dna_seq) {
  return $$Buffer.length(dna_seq) === 0;
}

function get(dna_seq, pos) {
  try {
    return $$Buffer.nth(dna_seq, pos);
  }
  catch (exn){
    return ;
  }
}

var get_e = $$Buffer.nth;

function string_of_range(dna_seq, start_pos, end_pos) {
  var range = end_pos - start_pos | 0;
  return $$Buffer.sub(dna_seq, start_pos, range);
}

export {
  Empty ,
  from_fasta ,
  from_string ,
  multiple_from_string ,
  is_empty ,
  length ,
  get ,
  get_e ,
  string_of_range ,
  to_string ,
  
}
/* No side effect */
