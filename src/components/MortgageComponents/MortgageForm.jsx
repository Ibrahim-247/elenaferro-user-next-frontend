"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Container from "@/common/Container";

export default function MortgageForm() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [showResult, setShowResult] = useState(false);

  const downPayment = useMemo(
    () => (homePrice * downPaymentPercent) / 100,
    [homePrice, downPaymentPercent]
  );

  const loanAmount = homePrice - downPayment;

  const monthlyPayment = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanTerm * 12;

    if (monthlyRate === 0) {
      return loanAmount / totalMonths;
    }

    return (
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="mt-26">
      <Container>
        <div className="max-w-150 mx-auto px-4 py-12 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-cormorant font-bold text-secondary">
              Mortgage <span className="text-muted-foreground">Calculator</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Estimate your monthly mortgage payments with our easy-to-use
              calculator.
            </p>
          </div>

          {/* Form */}
          <div className="p-6 space-y-5">
            {/* Home Price */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Home Price</label>
              <Input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </div>

            {/* Down Payment */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Down Payment</label>
              <Input value={`$${downPayment.toLocaleString()}`} disabled />

              <div className="flex items-center gap-4">
                <Slider
                  value={[downPaymentPercent]}
                  min={0}
                  max={50}
                  step={1}
                  onValueChange={(v) => setDownPaymentPercent(v[0])}
                />
                <span className="text-sm text-muted-foreground w-10">
                  {downPaymentPercent}%
                </span>
              </div>
            </div>

            {/* Loan Term */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Loan Term</label>
              <Select
                value={loanTerm.toString()}
                onValueChange={(v) => setLoanTerm(Number(v))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 years</SelectItem>
                  <SelectItem value="20">20 years</SelectItem>
                  <SelectItem value="30">30 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Interest Rate */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Interest Rate</label>
              <div className="relative">
                <Input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <span className="absolute right-3 top-2.5 text-sm text-muted-foreground">
                  %
                </span>
              </div>
            </div>

            {/* Calculate */}
            <Button
              className="w-full bg-secondary text-white hover:bg-secondary/90 h-11"
              onClick={() => setShowResult(true)}
            >
              Calculate
            </Button>
          </div>

          {/* Result */}
          {showResult && (
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                Estimated Monthly Payment
              </h3>
              <p className="text-3xl font-bold text-secondary">
                ${monthlyPayment.toFixed(2)}
              </p>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>Loan Amount: ${loanAmount.toLocaleString()}</p>
                <p>Down Payment: ${downPayment.toLocaleString()}</p>
                <p>Term: {loanTerm} years</p>
                <p>Interest Rate: {interestRate}%</p>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="bg-muted/40 rounded-lg p-4 text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> These figures are estimates only and do
            not represent exact loan terms. Please consult your lender for
            official rates.
          </div>
        </div>
      </Container>
    </div>
  );
}
