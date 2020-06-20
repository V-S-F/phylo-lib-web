// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

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
  var switcher = c - 84 | 0;
  if (!(switcher > 11 || switcher < 0)) {
    return switcher > 10 || switcher < 1;
  }
  switch (switcher) {
    case -18 :
    case -16 :
    case -15 :
    case -14 :
        return false;
    case -19 :
    case -17 :
    case -13 :
        return true;
    default:
      return false;
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

function from_string(str) {
  var dna_seq = $$Buffer.create(128);
  parse_line(str, dna_seq);
  return dna_seq;
}

function is_empty(dna_seq) {
  return $$Buffer.length(dna_seq) === 0;
}

var length = $$Buffer.length;

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

var to_string = $$Buffer.contents;

export {
  Empty ,
  from_fasta ,
  from_string ,
  is_empty ,
  length ,
  get ,
  get_e ,
  string_of_range ,
  to_string ,
  
}
/* No side effect */
