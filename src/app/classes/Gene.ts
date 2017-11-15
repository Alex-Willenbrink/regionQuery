export class Gene {
  gene_id: string | null;
  gene_symbol: string | null;
  description: string | null;
  chromosome: string | null;
  start: number | null;
  end: number | null;
  seq: string | null;
  seq_rev: string | null;

  constructor(gene_id, gene_symbol, description, chromosome, start, end) {
    this.gene_id = gene_id;
    this.gene_symbol = gene_symbol;
    this.description = description;
    this.chromosome = chromosome;
    this.start = start;
    this.end = end;
  }

  setSequence(sequence: string) {
    this.seq = sequence;
    this.generateReverseSequence(sequence);
  }

  generateReverseSequence(sequence): void {
    if (sequence) {
      const nucHash = { A: "T", T: "A", C: "G", G: "C" };
      this.seq_rev = sequence
        .split("")
        .reverse()
        .map(nucleotide => nucHash[nucleotide] || "?")
        .join("");
    }
  }
}
